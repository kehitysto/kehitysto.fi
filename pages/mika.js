import BasicLayout from '../layouts/site-simple-page';
import Link from 'next/link';

const title = 'Mikä Kehitystö?';

export default function Page() {
  return (
    <BasicLayout title={title}>
      <div>
        <div className="bigtext">

          <p>
          Kehitystön yhteisö on vuonna 2014 perustettu vapaaehtoisten yhteisö, jonka keskeinen tavoite on auttaa ihmisiä vastaamaan kahteen kysymykseen: Mitä haluan elämältäni? Ja miten saavutan sen?
          </p>

          <p>
          Yhteisömme keskeisinä arvoina on etsiä avoimesti omia kehittymismahdollisuuksiamme, lähestyä asioita tieteellisellä otteella, ja tukea toinen toisiamme kunkin omalla matkalla.
          </p>

          <p>
          Kaikki Kehitystön tapahtumat järjestettään vapaaehtoisten voimin, mutta taustalla tukea ja apua tarjoaa myös tähän tarkoitukseen perustettu Kehitystö ry.
          </p>

        </div>

        <h1>Kehitystö ry</h1>

        <p>Kehitystö ry on vuonna 2016 perustettu yhdistys, jonka keskeisenä tarkoituksena on auttaa Kehitystön yhteisön jäseniä auttamaan toinen toisiaan. Kehitystö ry mm. tarjoaa apua työpajojen tilojen varaamiseen, tapahtumien markkinoimiseen, tapahtumasisältöjen suunnitteluun sekä tapahtumien materiaalien tuottamiseen.</p>

        <p>Lisää yhdistyksestä ja siellä toimivista ihmisistä <Link href="/yhdistys/"><a>Kehitystö ry:n omalla sivulla</a></Link>.</p>

        <h1>Kehitystön syntytarina</h1>

        <p><strong>Tämän tarinan on kirjoittanut Kehitystön perustaja Kaj Sotala:</strong></p>

        <p>Osallistuin vuonna 2014 yhdysvaltalaisen <a href="http://rationality.org/">Center for Applied Rationalityn</a> Englannissa järjestämään työpajaan. Työpajassa käsiteltiin erilaisia tieteellisestä tutkimuksesta ammentavia tapoja parantaa omaa elämäänsä ja saavuttaa itselleen tärkeitä asioita. Tärkeämpää kuin mikään yksittäinen tekniikka oli kuitenkin työpajan välittämä ajattelutapa: elämäänsä on aidosti mahdollista muuttaa. Haastaviakin tavoitteita voi saavuttaa, jos on valmis investoimaan niihin tarpeeksi aikaa, ja ymmärtää miten niitä kannattaa lähestyä.</p>

        <p>Kotiin palattuani näin vähän aikaa toiset ihmiset aivan uudella tavalla. Näin kaupan kassanhenkilönkin takana ihmisen joka – kaikkien muiden ihmisten tapaan – oli täynnä ääretöntä potentiaalia elää aivan omanlaistaan elämää.</p>

        <p>Tiedostin kuitenkin, että mikä tahansa työpaja tuottaisi vain lyhytaikaisen muutoksen. Ellei sitä jotenkin ylläpidettäisi, niin tämä voimakas tunnekuohu ja mahdollisuuksien näkeminen laantuisi ajan kanssa. Maailma muuttuisi taas samannäköiseksi kuin aina, ja uudet ideat hiipuisivat. Oma elämäni, taikka sitten kenenkään muun elämä, ei niistä merkittävästi muuttuisi.</p>

        <p>Päätin alkaa vetää ystävilleni pienimuotoisia työpajoja, joissa kävisin läpi oppimaani materiaalia. Osittain siksi, että halusin tämän materiaalin olevan kaikkien ystävieni käytössä ja hyödyttävän heidän elämäänsä. Ja osittain myös siksi, että sen opettaminen olisi hyvä tapa muistuttaa itseäni siitä. Halusin ympäröidä itseni samoin ajattelevilla ja samanlaisia tekniikoita käyttävillä ihmisillä, sekä itseni että heidän vuokseen.</p>

        <p>Ensimmäisen työpajani vedin vuoden 2014 aikana. Seuraavan vuoden aikana mukaan tarttui merkittävä määrä ihmisiä, jotka alkoivat osallistua tähän toimintaan. Porukalle löytyi nimi, Kehitystö. Perustimme verkkosivut, joihin minä ja varhaisen vaiheen kehitystöläinen Touko Kuusi kirjoitimme artikkeleita. Vähitellen työpajat alkoivat löytää omaa muotoaan – ne lakkasivat olemasta haparoivia yrityksiä kopioida Center for Applied Rationalityn työpajaa, ja alkoivat kehittyä enemmän tekijöidensä näköiseksi. Pian sen jälkeen ne myös lakkasivat olemasta vain omille kavereilleni vedettyjä pienen piirin tapahtumia, ja muuttuivat julkisesti mainostettaviksi ja kaikille avoimiksi.</p>

        <p>Tänä päivänä siis myös sinä voit ottaa osaa joko suoraan <Link href="/verkkotyopajat/"><a>verkkotyöpahoihin</a></Link> tai <Link href="/tule/"><a>muuhun toimintaan</a></Link>.</p>
      </div>
    </BasicLayout>
  );
}
