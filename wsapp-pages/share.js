
import WsAppLayout from '../layouts/wsapp-base'

import { useEffect, useState } from "react";

import Link from 'next/link'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function Page() {

  const [enterUrl, setEnterUrl] = useState('');

  useEffect(() => {
    setEnterUrl( (location+"").replace('/share/', '/enter/') );
  }, []);

  const clipCopy = () => {
    const el = document.querySelector('#start_done_link_input');
    el.select();
    el.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  return (
    <WsAppLayout>
      <div className="container text-center">
        <div className="row">
            <div className="col-12">
                <h4>Työtila pienryhmällesi on nyt luotu!</h4>
                <p>Voit lähettää alla olevan työtilan osoitten ryhmäsi muille jäsenille haluamallasi tavalla.</p>
            </div>
            <div className="input-field col-12 col-md-8 offset-md-2 center-align">
                <input id="start_done_link_input" type="text" value={enterUrl} readOnly={true} style={{width: "100%"}} />
            </div>
            <div className="col-12">
                <p><br/><a onClick={()=> clipCopy()} className="btn">Kopioi osoite leikepöydälle</a></p>
                <p>Alla vielä klikattava versio linkistä kun haluat itse siirtyä tilaan:</p>
                <h6><Link href={enterUrl}><a>{enterUrl}</a></Link></h6>
            </div>
        </div>
      </div>
    </WsAppLayout>
  )
}
