import BasicLayout from '../layouts/site-simple-page'
import Link from 'next/link'

export default function Page() {
  return (
    <BasicLayout title="Kehitystön verkkotyöpaja: Konkretisoi elämäsi suunta">
      <h2>Täältä konkretiaa elämän suuntaan etäyhteyksin!</h2>

      <p>Työpajassa pohditaan yhdessä pienryhmän kanssa oman elämäsi polkua ja ehkä myös ihan uusia suuntia. Mistä olet ylpeä, mikä sinua inspiroi, mitä haluaisit muuttaa? Työpajan jälkeen sinulla on selkeämpi käsitys mitä haluat tulevalta vuodelta ja millaisin konkreettisin askelin voit edetä haluamaasi suuntaan.</p>

      <p>Työpaja sisältää toimivassa, dynaamisessa suhteessa yksilöharjoituksia ja omaa reflektointia sekä keskustelua ja ajatustenvaihtoa pienryhmissä. Työpajassa käytettävän metodin myötä keskusteluihin voi osallistua täysipainoisesti ja syvällisesti, silti säädellen itse mitä omasta elämästään haluaa tarkalleen ottaen jakaa.</p>

      <p>Työpaja sisältää yksilöharjoituksia ja omaa reflektointia sekä keskustelua ja ajatustenvaihtoa oman 2-4 hengen pienryhmäsi kanssa. Työpajan kokonaiskesto on noin 2 tuntia. Jos sinulla on jo oma pienryhmäsi ja sen tapaamisaja tiedossa, voit luoda yhteisen työtilanne ilmaiseksi alla olevasta linkistä (ei vaadi luottokorttia, rekisteröitymistä eikä edes sähköpostia):</p>

      <p><Link href="/verkkotyopajat/kes/"><a>Luo pienryhmäsi työtila nyt!</a></Link></p>

      <p>Jos sinulla ei vielä ole ryhmää valmiina, voit liittyä Facebookissa "<a href="https://www.facebook.com/groups/kehitystonyhteiso">Kehitystön Yhteisö</a>" -nimiseen ryhmään, jossa yhteisön jäsenet auttavat sinua ryhmän kokoamisessa.</p>

      <h2>Haluatko olla tukemassa hyvää toimintaa?</h2>

      <p>Kehitystö ry pyrkii tarjoamaan henkilökohtaisen kehityksen työkaluja mahdollisimman laajalle joukolle, ja toistaistaiseksi voimme tarjota verkkotyöpajamme käyttäjille ilmaiseksi. Tämän työpajan tuotannon ja ylläpidon ovat mahdollistaneet Espoon kaupungin järjestötuki, jäsenten yksityiset lahjoitukset ja jäsenten vapaaehtoinen työpanos. Jos haluat tukea toiminnan jatkuuvuutta, voit liittyä yhdistyksen jäseneksi <Link href="/jaseneksi/"><a>täältä</a></Link>.</p>

      <h2>Lisätietoja työpajan materiaaleista</h2>

      <p>Verkkotyöpaja pohjautuu Kehitystön <strong>Tukea tavoitteisiin tapojen voimalla</strong> -työpajan materiaalien ensimmäiseen osaan, johon voit halutessasi tutustua <Link href="/tyopaja-konkretisoi-elamasi-suunta/"><a>täältä</a></Link>.</p>
    </BasicLayout>
) }



