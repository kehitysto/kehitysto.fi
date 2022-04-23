import React from "react";
import wsa from '../lib/wsapp-utils';
import RealtimeContext from '../components/realtime-context.js'

export default function ParticipantStatuses({ dynamicData }) {
  const realtimeData = React.useContext(RealtimeContext);
  var list = [];


  dynamicData.participants.forEach( (name, idx) => {
    const adata = realtimeData[idx] || {};
    const la = adata.last_action;
    const ca = adata.current_action;

    const u = {
      name : name,
      section : ca ? ca.section : '',
      step : ca ? ca.step : '',
      text : '',
      time_left : '',
    };

    if ( ! ca || ! ca.step_type ) {
      u.text = 'tietämättömissä';
    }
    else {
      if ( ca.step_type == 'enter' ) u.text = 'saapui työtilaan';
      else if ( ca.step_type == 'return' ) u.text = 'palasi työtilan etusivulle';
      else if ( ca.step_type == 'waitall' ) u.text = 'odottaa muita edetäkseen';
      else if ( ca.step_type == 'conference' ) u.text = 'on ottamassa yhteyttä muihin';
      else if ( ca.step_type == 'video' ) {
        u.text = ca.video_text ? 'lukee videotekstiä' : ca.paused ? 'pysäytti videon' : 'katsoo videota';
        if ( ca.left ) {
          u.time_left = ca.video_text ? ca.left + ' kappaletta jäljellä' : wsa.formatTimeLeftStatus( ca.left );
        }
        else {
          u.text = ca.video_text ? 'aloitti lukemaan videotekstiä' : 'aloitti katsomaan videota';
        }
      }
      else if ( ca.step_type == 'assignment' ) {
        u.text = 'tekee tehtävää';
        if ( ca.left ) u.time_left = wsa.formatTimeLeftStatus( ca.left );
        if ( la && la.step_type == 'assignment' && ! la.extra_time_enabled && ca.extra_time_enabled ) {
          u.text = 'halusi lisäaikaa tehtävään'
        }
      }
      else {
          u.text = '';
          console.log( 'UNHANDLED STEP TYPE:' + JSON.stringify( ca ) );
      }
    }
    list.push( u );
  } );

  var shared_section = list[0] ? list[0].section : '';
  list.forEach( function(u) {
      if (u.section != shared_section ) shared_section = '';
  } );

  return (
    <div className="text-center">
      { list.map( ( u, idx ) => (
        <div key={idx}>
          <h5>{u.name}</h5>
          <p>{u.text}</p>
          <p className={( shared_section || ! u.section ) ? 'd-none' : 'subtext'}>osiossa {u.section}</p>
          <p className={( shared_section ) ? 'subtext' : 'd-none'}>kohdassa {u.step}</p>
          <p className={u.time_left ? 'subtext' : 'd-none'}>jäljellä noin {u.time_left}</p>
        </div>
      ) ) }
    </div>
  );
}
