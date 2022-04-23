import BasicLayout from '../layouts/site-simple-page'
import Link from 'next/link'

export default function Page() {
  return (
    <BasicLayout title="Kehitystön verkkotyöpaja: Tukea tavoitteisiin tapojen voimalla">
      <h2>Täältä tukea tavoitteisiisi etäyhteyksin!</h2>

      <p>Haluaisitko enemmän aikaa ja energiaa arkeesi? Huomaatko usein käyttäneesi aikasi tavoilla, jotka eivät oikeasti edistä tavoitteitasi, lataa akkujasi tai lopulta edes tuo merkittävästi iloa elämääsi? Löysit oikeaan paikkaan!</p>

      <p>Tämän verkkotyöpajan tarkoituksena on selvittää millaiset tavat ja tottumukset ohjaavat nykyistä elämääsi, ja mistä niiden muokkaaminen kannattaa aloittaa suurimman vaikutuksen aikaansaamiseksi. Harjoitusten kautta löydät juuri sinulle sopivia työkaluja, joiden avulla voit luoda aikaa ja energiaa vapauttavia rutiineja.</p>

      <p>Työpaja sisältää yksilöharjoituksia ja omaa reflektointia sekä keskustelua ja ajatustenvaihtoa oman 2-4 hengen pienryhmäsi kanssa. Työpajan kokonaiskesto on hieman yli 3 tuntia, jonka voi halutessaan jakaa ryhmän toiveiden mukaan vaikka kahdelle illalle. Jos sinulla on jo oma pienryhmäsi ja sen tapaamisaja tiedossa, voit luoda yhteisen työtilanne ilmaiseksi alla olevasta linkistä (ei vaadi luottokorttia, rekisteröitymistä eikä edes sähköpostia):</p>

      <p><Link href="/verkkotyopajat/tttvfull/"><a>Luo pienryhmäsi työtila nyt!</a></Link></p>

      <p>Jos sinulla ei vielä ole ryhmää valmiina, voit liittyä Facebookissa "<a href="https://www.facebook.com/groups/kehitystonyhteiso">Kehitystön Yhteisö</a>" -nimiseen ryhmään, jossa yhteisön jäsenet auttavat sinua ryhmän kokoamisessa.</p>

      <h2>Haluatko olla tukemassa hyvää toimintaa?</h2>

      <p>Kehitystö ry pyrkii tarjoamaan henkilökohtaisen kehityksen työkaluja mahdollisimman laajalle joukolle, ja toistaistaiseksi voimme tarjota verkkotyöpajamme käyttäjille ilmaiseksi. Tämän työpajan tuotannon ja ylläpidon ovat mahdollistaneet Espoon kaupungin järjestötuki, jäsenten yksityiset lahjoitukset ja jäsenten vapaaehtoinen työpanos. Jos haluat tukea toiminnan jatkuuvuutta, voit liittyä yhdistyksen jäseneksi <Link href="/jaseneksi/"><a>täältä</a></Link>.</p>

      <h2>Lisätietoja työpajan materiaaleista</h2>

      <p>Verkkotyöpaja pohjautuu Kehitystön <strong>Tukea tavoitteisiin tapojen voimalla</strong> -työpajan materiaaleihin, joihin voit halutessasi tutustua <Link href="/tyopaja-tukea-tavoitteisiin-tapojen-voimalla/"><a>täältä</a></Link>.</p>
    </BasicLayout>
) }



