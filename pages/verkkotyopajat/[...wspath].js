
import fs from 'fs';
import path from 'path';
import neatCsv from 'neat-csv';
import wsa from '../../lib/wsapp-utils';

const dataDir = 'wsapp-data';

import IndexPage from '../../wsapp-pages/index';
import SharePage from '../../wsapp-pages/share';
import EnterPage from '../../wsapp-pages/enter';
import WelcomePage from '../../wsapp-pages/welcome';
import WaitallPage from '../../wsapp-pages/waitall';
import VideoPage from '../../wsapp-pages/video';
import AssignmentPage from '../../wsapp-pages/assignment';
import ConferencePage from '../../wsapp-pages/conference';

const layoutMap = {
  index : IndexPage,
  share : SharePage,
  enter : EnterPage,
  welcome : WelcomePage,
  waitall : WaitallPage,
  video : VideoPage,
  assignment : AssignmentPage,
  conference : ConferencePage,
};

import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function Page({ pageId, courseData, courseContent }) {
  const Layout = layoutMap[ pageId ];

  const [dynamicData, setDynamicData] = useState({ participants : [], currentStep : {} });

  const router = useRouter();

  useEffect(() => {
    const freshDynamicData = wsa.extractDynamicData( courseContent );

    if ( JSON.stringify(dynamicData) != JSON.stringify(freshDynamicData) ) {
      setDynamicData( freshDynamicData );
      if ( ! Object.keys(wsa.getRealtimeData()).length && freshDynamicData.shield ) {
        wsa.recordInitialUserAction( freshDynamicData )
      }
    }

    wsa.checkRedirects( router.query.g );
  } );

  return (
    <Layout courseData={courseData} courseContent={courseContent} dynamicData={dynamicData} />
  )
}

export async function getStaticPaths() {
  const courseList = JSON.parse( fs.readFileSync( path.join(process.cwd(), dataDir, 'index.json'), 'utf8') );

  const paths = courseList
    .flatMap( course => {
      return Object.keys( layoutMap )
        .map( pageId => [ course.path_id, pageId ] )
        .concat( [ [ course.path_id ] ] )
        .map( wspath => { return { params : { wspath } } } );
    } );

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const courseId = params.wspath[0];
  const pageId = params.wspath[1] || 'index';

  const courseList = JSON.parse( fs.readFileSync( path.join(process.cwd(), dataDir, 'index.json'), 'utf8') );

  const courseData = courseList.find( c => c.path_id == courseId );

  const dataFiles = fs.readdirSync( dataDir ).filter( f => f.match(/\.csv$/) );
  const dataFile = dataFiles.find( f => f.indexOf(courseId + ".csv") > -1 );
  const dataFileContent = dataFile ? fs.readFileSync( path.join(dataDir, dataFile ), 'utf8') : '';
  const courseContentData = dataFile ? await neatCsv(dataFileContent) : [];
  const courseContent = courseContentData.filter( c => c.id ).sort((a,b) => a-b);

  return {
    props: {
      pageId,
      courseData,
      courseContent
    }
  }
}