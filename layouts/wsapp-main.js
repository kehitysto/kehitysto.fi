import WsAppBaseLayout from './wsapp-base';
import wsa from '../lib/wsapp-utils';

import ParticipantStatuses from '../components/participant-statuses-element';

const naviLinksCache = {};

export default function WsAppMainLayout({ children, courseContent, courseData, dynamicData }) {
  const stepId = dynamicData.currentStep ? dynamicData.currentStep.id : 0;
  const cacheKey = courseData.path_id + '---' + stepId;

  const naviLinks = naviLinksCache[ cacheKey ] || generateNaviLinks( courseContent, dynamicData );
  naviLinksCache[ cacheKey ] = naviLinks;
  return (
    <WsAppBaseLayout title={ courseData.name }>
      <div className="container">
        <h5 className="text-center">{courseData.name} - { dynamicData.currentStep.section ? dynamicData.currentStep.section : 'Tervetuloa työpajaan' }</h5>
        <hr />
        <div className="row">
          <div className="col-xs-12 col-md-8 col-lg-9 order-md-5 order-lg-4">
            {children}
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 order-md-1">
            <ParticipantStatuses dynamicData={dynamicData} />
          </div>
        </div>
        <hr />
        <div className="text-center workshop-progression-container">
          { naviLinks.map( (data, idx ) => (
            <span key={idx}><a onClick={() => wsa.moveToWorkshopStep(dynamicData, courseContent, data[2])} className={data[3] ? "progression_unit active" : "progression_unit"}><i className="material-icons">{data[1]}</i>{data[0]}</a><span className={idx == naviLinks.length-1 ? 'd-none' : ''}> &rarr;</span></span>
          ) ) }
        </div>
        <h6 className="text-center"><a onClick={() => wsa.moveToWorkshopStep(dynamicData, courseContent, 0)} className={dynamicData.currentStep.section ? '' : 'd-none'}>&uarr; Palaa työpajan etusivulle &uarr;</a></h6>
      </div>
    </WsAppBaseLayout>
  )
}

const generateNaviLinks = ( courseContent, dynamicData ) => {
  const naviLinks = [];
  const addedSections = {};

  let next_step;
  courseContent.forEach( (step) => {
    if ( dynamicData.currentStep.section ) {
      if ( dynamicData.currentStep.section != step.section ) {
        if ( naviLinks.length && ! next_step ) next_step = step;
        return;
      }
      const duration = wsa.calculateStepSeconds( step, dynamicData );
      const name = step.step + ( duration ? ' (' + wsa.MsToTimeString(duration*1000) + ')' : '' );
      naviLinks.push( [name, step.icon, step.id, dynamicData.currentStep.id == step.id ] );
    }
    else {
      if ( addedSections[ step.section ] ) return;
      naviLinks.push( [ step.section, 'school', step.id  ] );
      addedSections[ step.section ] = true;
    }
  } );

  if ( dynamicData.currentStep.section && dynamicData.currentStep.section != courseContent[courseContent.length-1].section ) {
    naviLinks.push( [ 'Seuraava osio', 'next_plan', next_step.id ] )
  }

  return naviLinks;
}
