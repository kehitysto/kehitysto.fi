
import WsAppMainLayout from '../layouts/wsapp-main'
import wsa from '../lib/wsapp-utils';

export default function Page({ courseData, courseContent, dynamicData }) {
  return (
    <WsAppMainLayout courseContent={courseContent} courseData={courseData} dynamicData={dynamicData}>
      <div className="text-center">
        <h4>Tervetuloa työtilaan <a onClick={() => wsa.moveToEntryStep('enter')}>{dynamicData.participants[dynamicData.userIndex]}</a></h4>
        <p>Työpajan sisältö tulee pitkin työpajaa ilmestymään tähän kohtaan ruutua.</p>
        <p className="d-none d-md-block">Vasemmalla reunalla näet aina tietoja ryhmän muiden jäsenten etenemisestä.</p>
        <p className="d-block d-md-none">Alapuolella näet aina tietoja ryhmän muiden jäsenten etenemisestä.</p>
        <p>Työpajan ensimmäinen osio on {courseContent[0].section}, johon voit siirtyä painamalla alla olevaa nappia:</p>
        <p><a onClick={() => wsa.moveToWorkshopStep(dynamicData, courseContent, courseContent[0].id)} className="waves-effect waves-light btn"><i className="material-icons float-end">send</i>Siirry ensimmäiseen osioon</a></p>
        <p>Sivun alareunasta löytyvät myös muut työpajan osiot. Jos haluatte jatkaa aiempaa työpaa, voitte valita seuraavan osion sieltä.</p>
      </div>
    </WsAppMainLayout>
  )
}
