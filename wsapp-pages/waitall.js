import WsAppStepLayout from '../layouts/wsapp-step';
import wsa from '../lib/wsapp-utils';
import WaitallForwarder from '../components/waitall-forwarder';

export default function Page({ courseData, courseContent, dynamicData }) {
  return (
    <WsAppStepLayout courseContent={courseContent} courseData={courseData} dynamicData={dynamicData}>
      <p className={ dynamicData.currentStep.step_modifier == 'first' ? '' : 'd-none' }>Suosittelemme pääsääntöisesti etenemistä yhdessä ryhmän kanssa samaan aikaan. Seuraava osio alkaa automaattisesti kun kaikki ovat päässeet tänne asti.</p>
      <h5>Odotetaan muita ryhmäläisiä...</h5>
      <p></p>
      <WaitallForwarder dynamicData={dynamicData} courseContent={courseContent} />
      <p><a onClick={() => wsa.takeNextWorkshopStep(dynamicData, courseContent)} className="skiplink">Etene odottamatta muita &rarr;</a></p>
    </WsAppStepLayout>
  )
}
