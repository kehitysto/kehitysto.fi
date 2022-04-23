import React from "react";
import wsa from '../lib/wsapp-utils';
import AssignmentTimerClock from './assignment-timer-clock';
import RealtimeContext from '../components/realtime-context.js'

let previousStep = 0;

export default function AssignmentTimer({ dynamicData }) {
  const realtimeData = React.useContext(RealtimeContext);
  const [startTime, setStartTime ] = React.useState(0);
  React.useEffect( () => () => previousStep = 0, [] );

  if ( dynamicData?.currentStep?.step_type != 'assignment' ) return ( null );

  if ( dynamicData.stepId != previousStep ) {
    previousStep = dynamicData.stepId;
    // it looks like setting the state synchronously does not cause a child refresh
    setTimeout( () => { setStartTime( Date.now() ); }, 0 );
  }

  const durationSeconds = wsa.calculateStepSeconds( dynamicData.currentStep, dynamicData, realtimeData );

  return (
    <AssignmentTimerClock startTime={startTime} durationSeconds={durationSeconds} />
  );
}
