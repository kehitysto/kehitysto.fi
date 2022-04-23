import CommonLayout from '../layouts/site-navi'
import Link from 'next/link'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <CommonLayout title="Etusivu">

      <section className="front-section text-center" style={{ backgroundImage: "url('" + publicRuntimeConfig.basePath + "/img/bg/bg3.jpg')"}}>
        <div className="container">
          <h2 className="text-uppercase">Verkkotyöpajat avattu koekäyttöön!</h2>
          <h3>Tarvitset vain pari kaveria etäyhteyden päähän, ja pari tuntia yhteistä aikaa!</h3>
          <h4>Tarjolla sekä parempaa toimintakykyä että selkeyttä elämän suuntaan:</h4>
          <Link href="/verkkotyopajat/"><a className="cta">Valitse verkkotyöpajasi</a></Link>
        </div>
      </section>

      <section className="front-section text-center" style={{ backgroundImage: "url('" + publicRuntimeConfig.basePath + "/img/bg/kehitysto-texture-bw.png')"}}>
        <div className="container">
          <h2 className="text-uppercase">Mikä on kehitystön yhteisö?</h2>
          <h3>Mitä haluat elämältäsi? Miten voisit saavuttaa sen?</h3>
          <h3>Kehitystöläisiä yhdistää halu tietää <b>mitä tieteellä on tarjottavana</b> tällaisten oman elämän isojen kysymysten äärelle.</h3>
          <h3>Jos olet myös <b>uteliais oman kasvusi mahdollisuuksista</b>, ja haluat kehityksesi ohella <b>tarjota tukeasi muille</b> heidän omiin tavoitteisiinsa, olet jo henkisesti Kehitystöläinen!</h3>
          <Link href="/mika/"><a className="cta">Lue lisää kehitystöstä</a></Link>
        </div>
      </section>

      <section className="front-section text-center" style={{ backgroundImage: "url('" + publicRuntimeConfig.basePath + "/img/bg/bg3.jpg')"}}>
        <div className="container">
          <h2 className="text-uppercase">Järjestä toimintaa omalla paikkakunnallasi!</h2>
          <h3>Kehitystö julkaisee vapaasti käytettäviä materiaaleja niin, että myös sinä voit järjestää tapahtumia omalla paikkakunnallasi!</h3>
          <Link href="/materiaalit/"><a className="cta">Millaisia materiaaleja on tarjolla?</a></Link>
        </div>
      </section>

      <section className="front-section text-center" style={{ backgroundImage: "url('" + publicRuntimeConfig.basePath + "/img/bg/kehitysto-texture-bw.png')"}}>
        <div className="container">
          <h2 className="text-uppercase">Mitä ihmiset meistä sanovat?</h2>
          <h3>Alle on kerätty muutamia palautteita, joita olemme saaneet työpajoihimme osallistuneilta ihmisiltä.</h3>
        </div>
        <div className="testimonial-container">
          <div className="row">

            <div className="col-12 col-md-6">

              <div className="testimonial">
                <span className="testimonial-text">Kehitystön työpajat ovat aidosti auttaneet minua selvittämään ja jäsentämään elämäni tavoitteita, sekä antaneet rohkeutta ja työkaluja toteuttaa niitä. Tapahtumien lämpimästä ja luottamuksellisesta ilmapiiristä on aina jäänyt hyvä fiilis!</span><br />
                <img src={ publicRuntimeConfig.basePath + "/img/testimonials/mari.jpg" } /><span className="testimonial-name">Mari M.</span>
              </div>

            </div>

            <div className="col-12 col-md-6">

              <div className="testimonial">
                <span className="testimonial-text">Olen ollut mukana monessa Kehitystön työpajassa ja muiden ihmisten läsnäolo on aina pysäyttänyt minut tarkastelemaan myös omia tavoitteitani syvemmin ja systemaattisemmin kuin se onnistuu arkisen elämän paineiden keskellä.</span><br />
                <img src={ publicRuntimeConfig.basePath + "/img/testimonials/antti.jpg" } /><span className="testimonial-name">Antti V.</span>
              </div>

            </div>

          </div>
        </div>

        <div className="testimonial-container">
          <div className="row">

            <div className="col-12 col-md-6">

              <div className="testimonial">
                <span className="testimonial-text">Olen onnistunut pitkäaikaisten tavotteiden selkeyttämisessä Kehitystön työpajojen avulla. Tämä on tukenut minua omien opintojeni ja uran alkuvaiheilla.</span><br />
                <img src={ publicRuntimeConfig.basePath + "/img/testimonials/venla.jpg" } /><span className="testimonial-name">Venla I.</span>
              </div>

            </div>

            <div className="col-12 col-md-6">

              <div className="testimonial">
                <span className="testimonial-text">Olen onnistunut pitkäaikaisten tavotteiden selkeyttämisessä Kehitystön työpajojen avulla. Tämä on tukenut minua omien opintojeni ja uran alkuvaiheilla.</span><br />
                <img src={ publicRuntimeConfig.basePath + "/img/testimonials/tuukka.jpg" } /><span className="testimonial-name">Tuukka S.</span>
              </div>

            </div>

          </div>
          <Link href="/tule/"><a className="cta">Miten pääsen mukaan?</a></Link>
        </div>
      </section>

    </CommonLayout>
  )
}
