import WsAppStepLayout from '../layouts/wsapp-step'
import wsa from '../lib/wsapp-utils';

import Router from 'next/router'
import { useEffect } from "react";

export default function Page({ courseData, courseContent, dynamicData }) {

  const readMore = () => {
    const { query, pathname } = Router;
    query.scroll = Number( ( query.scroll || 0 ) ) + 1;
    Router.push( { pathname, query } );
  };

  useEffect( () => {
    document.querySelector("#workshop_video_container").scrollTop = 99999;
  } );

  const textParts = ( (dynamicData.currentStep || {} ).video_text || '').split(/\n+/);

  return (
    <WsAppStepLayout courseContent={courseContent} courseData={courseData} dynamicData={dynamicData}>
      <div id="workshop_video_container" style={{height:"300px", overflowY: "scroll"}}>
        { textParts.filter( ( part, idx ) => idx <= ( dynamicData.scroll || 0 ) ).map( ( part, idx ) => (
          <div key={idx}><p>{part}</p></div>
        ) ) }
      </div>
      <p className={dynamicData.scroll >= textParts.length -1 ? 'd-none' : ''}><a onClick={readMore} className="waves-effect waves-light btn"><i className="material-icons float-start">arrow_downward</i>Lue lisää<i className="material-icons float-end">arrow_downward</i></a></p>
      <p className={dynamicData.scroll >= textParts.length -1 ? 'd-none' : ''}><a onClick={() => wsa.takeNextWorkshopStep(dynamicData, courseContent) } className="skiplink">Ohita loput videosta &rarr;</a></p>
      <p className={dynamicData.scroll >= textParts.length -1 ? '' : 'd-none'}><a onClick={() => wsa.takeNextWorkshopStep(dynamicData, courseContent) } className="waves-effect waves-light btn">Jatka eteenpäin<i className="material-icons float-end">send</i></a></p>

    </WsAppStepLayout>
  )
}
