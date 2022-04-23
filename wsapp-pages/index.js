
import Router from 'next/router'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import WsAppLayout from '../layouts/wsapp-base'
import wsa from '../lib/wsapp-utils';

export default function Page({ courseData }) {
  return (
    <WsAppLayout>
      <div className="container text-center">
        <div className="row">
          <div className="col-12"><h6>Olet luomassa uutta pienryhmää "{courseData.name}" -verkkotyöpajan suorittamista varten</h6></div>
          <div className="col-12"><h4>Ketkä kuuluvat pienryhmääsi? (2-5 hlö)</h4></div>
          <div className="col-12"><p>Millä nimellä osallistujat haluavat itseään kutsuttavan ryhmän sisällä? Esim. oma etunimi:</p></div>
          { [1,2,3,4,5].map( idx => (
            <div key={idx} className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex align-items-center mb-4">
              <i className="material-icons float-start d-flex me-1">account_circle</i>
              <input type="text" className="form-control start_new_participant" placeholder={"Nimi (Osallistuja "+idx+")"} />
            </div>
          ))}
          <div className="col-12">
            <a onClick={startNew} className="waves-effect waves-light btn"><i className="material-icons float-end">send</i>Luo pienryhmä</a>
          </div>
        </div>
      </div>
    </WsAppLayout>
  )
}

const startNew = (e) =>  {
  var participants = Array.from( document.querySelectorAll(".start_new_participant") )
    .map( p => p.value )
    .filter( v => v );

  if ( participants.length < 2 ) {
    alert("Pienryhmään tarvitaan vähintään kaksi osallistujaa!")
    return;
  }

  const { query } = Router;
  query.g = wsa.createNewGroupData( participants );
  wsa.moveToEntryStep('share');
}
