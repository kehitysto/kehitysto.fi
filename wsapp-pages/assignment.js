import WsAppStepLayout from '../layouts/wsapp-step'
import wsa from '../lib/wsapp-utils';
import React from 'react';
import AssignmentTimer from '../components/assignment-timer';

export default function Page({ courseData, courseContent, dynamicData }) {

  const guideElements = (dynamicData.currentStep.guide_text || '').split(/\n+/).map( (part, idx) => {
    var header_match = part.match(/^(H===+) +(.*)/);
    if ( header_match ) {
      return React.createElement( 'h' + header_match[1].length, { key: idx }, header_match[2] );
    }
    else {
      return ( <p key={idx}>{part}</p> );
    }
  } );

  return (
    <WsAppStepLayout courseContent={courseContent} courseData={courseData} dynamicData={dynamicData}>
      <div>
        { guideElements }
      </div>

      <h5>Aikaa jäljellä: <AssignmentTimer dynamicData={dynamicData} /></h5>

      <div className={ dynamicData.currentStep.step_modifier == 'together' ? 'd-none' : '' }>
          <p>Kun olet valmis, voit kertoa siitä muille painamalla allaolevaa nappia.<span id="workshop_assignment_more_time_guide"> Jos tarvitset vielä pari minuuttia lisäaikaa, sille on oma nappinsa.</span></p>
          <p><a className="waves-effect waves-light btn" id="workshop_assignment_more_time"><i className="material-icons float-end">timer</i>Haluan hieman lisäaikaa</a> <a onClick={() => wsa.takeNextWorkshopStep(dynamicData, courseContent) } className="waves-effect waves-light btn"><i className="material-icons float-end">send</i>Olen valmis</a></p>
      </div>

      <div className={ dynamicData.currentStep.step_modifier == 'together' ? '' : 'd-none' }>
          <p>Kun olette valmiita, voitte siirtyä eteenpäin painamalla allaolevaa nappia.</p>
          <p><a onClick={() => wsa.takeNextWorkshopStep(dynamicData, courseContent) }  className="waves-effect waves-light btn"><i className="material-icons float-end">send</i>Eteenpäin</a></p>
      </div>
    </WsAppStepLayout>
  )
}
