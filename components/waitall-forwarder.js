import React from "react";
import wsa from '../lib/wsapp-utils';
import RealtimeContext from '../components/realtime-context.js'

let lastForwarded = 0;

export default function WaitallForwarder({ dynamicData, courseContent }) {
  const realtimeData = React.useContext(RealtimeContext);

  React.useEffect( () => { checkForForward(dynamicData, courseContent, realtimeData) }, [] )
  checkForForward(dynamicData, courseContent, realtimeData);

  return (
    null
  );
}

const checkForForward = ( dynamicData, courseContent, realtimeData ) => {
  if ( dynamicData?.currentStep?.step_type != 'waitall' ) return ( null );

  let laggardFound = false;

  if ( dynamicData.participants.length ) {
    dynamicData.participants.forEach( ( p, idx )=> {
      const pdata = realtimeData[idx] || {};
      const ca = pdata.current_action || {};
      if ( ! ca.id || ( Number( ca.id ) < Number( dynamicData.stepId ) ) ) laggardFound = true;
    } );

    // 1 second limit for cases where dynamicData does not update fast enough
    if ( ! laggardFound && lastForwarded + 1000 < Date.now() ) {
      lastForwarded = Date.now();
      wsa.takeNextWorkshopStep(dynamicData, courseContent);
    }
  }

}