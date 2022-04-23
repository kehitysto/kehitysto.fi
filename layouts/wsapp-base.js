import Head from 'next/head';

export default function WsAppBaseLayout({ children, title }) {

  return (
    <div className="wsapp-container">

      <Head>
        <title>{ title } - Kehitystö</title>
      </Head>

      <div>
        {children}
      </div>
    </div>
  )
}