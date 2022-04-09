import Head from 'next/head';
import Link from 'next/link'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function CommonLayout({ children, title }) {
  return (
    <>

      <Head>
        <title>{ title } - Kehitystö</title>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src={publicRuntimeConfig.basePath + "/img/kehitysto-banner-logo.png"} alt="Kehitystö logo" className="d-none d-sm-inline-block" />
              <img src={publicRuntimeConfig.basePath + "/img/kehitysto-small-logo.png"} alt="Kehitystö logo" className="d-inline-block d-sm-none" />
            </a>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapsableContent" aria-controls="navbarCollapsableContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapsableContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/verkkotyopajat/">
                  <a className="nav-link">Verkkotyöpajat</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/mika/">
                  <a className="nav-link">Mikä Kehitystö?</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tule/">
                  <a className="nav-link">Tule mukaan!</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/materiaalit/">
                  <a className="nav-link">Materiaalit</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://kehitysto.wordpress.com/">Blogi</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div id="bottomTextContainer">Kehitystö on vapaaehtoisyhteisö oman hyvinvoinnin edistämiseen, tieteellisellä otteella ja toisiamme yhdessä tukien.</div>
              <hr className="d-block d-md-none" />
            </div>
            <div className="col-12 col-md-6">
              <div id="kehitystoLinksContainer" className="float-md-end">
                <strong>Kehitystö Ry</strong>
                <br /><a href="mailto:kehitysto@gmail.com">kehitysto@gmail.com</a>
                <br /><a href="https://fb.com/kehitysto">Facebook-sivu</a>
                <br /><a href="https://fb.com/kehitysto/events">Tulevat tapahtumat</a>
                <br /><a href="https://fb.com/groups/kehitystonyhteiso">Yhteisön Facebook-ryhmä</a>
                <br /><Link href="/rekisteriseloste"><a>Rekisteriseloste</a></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
