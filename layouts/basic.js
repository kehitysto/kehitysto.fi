import CommonLayout from './common';

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function BasicLayout({ children, title }) {
  return (
    <CommonLayout title={title}>
      <div id="heading-breadcrumbs" style={{ background: "url('" + publicRuntimeConfig.basePath + "/img/bg/kehitysto-texture-bw.png') center center repeat"}}>
        <div className="container">
          <h1>{ title }</h1>
        </div>
      </div>
      <div className="container">
        {children}
      </div>
    </CommonLayout>
  )
}
