import WsAppLayout from '../layouts/wsapp-base'
import wsa from '../lib/wsapp-utils';
import Router from 'next/router'

export default function Page({ courseData, courseContent, dynamicData }) {

  const chooseUser = ( idx ) => {
    localStorage.setItem( 'kehitysto-wsapp-user-index-' + Router.query.g, idx );

    const redirectDataString = localStorage.getItem('kehitysto-wsapp-redirect-data-' + Router.query.g);
    const redirectData = JSON.parse( redirectDataString || 'false');

    if ( redirectData && redirectData.time > Date.now() - 1000*60*5 ) {
      localStorage.setItem('kehitysto-wsapp-redirect-data-' + Router.query.g, '');
      wsa.moveToWorkshopStep( dynamicData, courseContent, redirectData.query.step || 0 );
    }
    else {
      wsa.moveToWorkshopStep( dynamicData, courseContent, 0 );
    }
  };

  return (
    <WsAppLayout>
      <div className="container text-center">
        <div className="row">
          <h6>{courseData.name} - Tervetuloa työtilaan</h6>
          <hr />
        </div>
        <div className="row">
          <h4>Tervetuloa työtilaan! Kuka osallistujista olet?</h4>
        </div>
        <div className="row">
          <div className="mx-auto text-start" style={{width:"200px"}}>
          {dynamicData.participants.map((p, idx) => (
            <span key={idx}><br/><a  style={{width:"200px"}} onClick={() => chooseUser(idx)} className="btn"><i className="material-icons float-end">send</i>{p}</a><br/></span>
          ))}
          </div>
        </div>
      </div>
    </WsAppLayout>
  )
}
