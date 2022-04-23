import React from "react";
import wsa from '../lib/wsapp-utils';

let interval;

export default function AssignmentTimerClock({ startTime, durationSeconds }) {
  if ( ! startTime ) return ( null );

  const [ currentTime, setCurrentTime ] = React.useState( Date.now() );

  clearInterval( interval );
  interval = setInterval( () => { setCurrentTime( Date.now() ) }, 1000 );
  React.useEffect( () => () => { clearInterval(interval) }, [] );

  const left = Number(durationSeconds) - ( currentTime - startTime ) / 1000;
  const timeLeftString = left > 0 ? wsa.formatTimeLeftStatus( left ) : '0 sekuntia';
  console.log(startTime, durationSeconds, currentTime)

  return (
    <span>{timeLeftString}</span>
  );
}
