import WsAppMainLayout from './wsapp-main';

export default function WsAppStepLayout({ children, courseData, courseContent, dynamicData }) {
  return (
    <WsAppMainLayout courseContent={courseContent} courseData={courseData} dynamicData={dynamicData}>
      <div className="text-center">
        <h4><i className="material-icons">{ dynamicData.currentStep.icon }</i> { dynamicData.currentStep.step } <i className="material-icons">{ dynamicData.currentStep.icon }</i></h4>
        { children }
      </div>
    </WsAppMainLayout>
  )
}