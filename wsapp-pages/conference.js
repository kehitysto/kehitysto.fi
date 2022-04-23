import WsAppStepLayout from '../layouts/wsapp-step'
import wsa from '../lib/wsapp-utils';

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function Page({ courseData, courseContent, dynamicData }) {

  return (
    <WsAppStepLayout courseContent={courseContent} courseData={courseData} dynamicData={dynamicData}>
      <p>Ota nyt video- tai ääniyhteys muihin ryhmäläisiin!</p>
      <p>Kun olet onnistuneesti yhteydessä, voit avata tehtäväohjeistuksenne allaolevasta napista.</p>
      <p><a onClick={() => wsa.takeNextWorkshopStep(dynamicData, courseContent) } className="waves-effect waves-light btn"><i className="material-icons float-end">send</i>Olen yhteydessä</a></p>
    </WsAppStepLayout>
  )
}
