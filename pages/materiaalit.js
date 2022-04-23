import BasicLayout from '../layouts/site-simple-page';
import Link from 'next/link';

const title = 'Kehitystön vapaasti käytettävät materiaalit';

export default function Page() {
  return (
    <BasicLayout title={title}>

      <div class="bigtext">
        <p>Tältä sivulta löydät materiaaleja, joitka auttavat työpajojen ja tapahtumien järjestämisessä. Kehitystö ry on julkaissut nämä kenen tahansa vapaasti käytettäväksi.</p>
      </div>

      <h2>Millaisia materiaaleja Kehitystö julkaisee?</h2>

      <p>Kaikki vakiintuneiden tapahtumien materiaalit pyritään julkaisemaan siten, että niiden avulla kuka tahansa voi pitää tapahtuman omalle viiteryhmälleen - esim. työpaikalla, koulussa tai yhdistyksessä. Tapahtumien konsepti on luotu niin, että niiden järjestämiseen ei välttämättä tarvitse ollenkaan rahaa, mutta joskus pienet tarvikehankinnat auttavat tekemään tilaisuudesta sujuvamman, ja tähän Kehitystö ry:ltä voi hakea myös pientä taloudellista tukea.</p>

      <p>Lisäksi yksilöllistä apua kaikkiin työpajan järjestämiseen liittyviin kysymyksiin saa liittymällä <Link href="https://fb.com/kehitysto/events"><a>Kehitystön Yhteisön Facebook -ryhmään</a></Link> ja kysymällä rohkeasti!</p>

      <p>Alla toistaiseksi julkaistut materiaalit tapahtumiin ja tilaisuuksiin:</p>

      <h2>Työpaja: <Link href="/tyopaja-konkretisoi-elamasi-suunta"><a>Konkretisoi elämäsi suunta</a></Link></h2>

      <p>Työpajassa käydään läpi sitä mikä on ollut edellisen vuoden aikana myönteisellä tai kielteisellä tavalla merkityksellistä, ja millaisia asioita haluaisi elämäänsä enemmän tai vähemmän. Sen jälkeen asetetaan tämän saavuttamiseksi konkreettisia tavoitteita ja määritellään askeleet, jotka vievät niitä kohti. <Link href="/tyopaja-konkretisoi-elamasi-suunta"><a>Katso tarkempi ohjeistus täältä!</a></Link></p>

      <h2>Työpaja: <Link href="/tyopaja-tukea-tavoitteisiin-tapojen-voimalla"><a>Tukea tavoitteisiin tapojen voimalla</a></Link></h2>

      <p>Työpajassa tutustutaan tapojen muodostamisen teoriaan ja otetaan ensimmäiset askeleet tavoitteitasi tukevien tapojen määrittämiseen ja muodostamiseen. <Link href="/tyopaja-tukea-tavoitteisiin-tapojen-voimalla"><a>Katso tarkempi ohjeistus täältä!</a></Link>.</p>

      <h2>Kokoontuminen: <Link href="/kokoontuminen-ryhmavertaisohjaus"><a>Ryhmävertaisohjaus</a></Link></h2>

      <p>Kokoontumisessa jakaudutaan ohjaajan johdolla ryhmiin ja tuetaan ryhmälle mukautetun GROW-prosessin mukaisesti jokaisen yksilön omien tavoitteiden täsmentymistä ja suunnittelua. <Link href="/kokoontuminen-ryhmavertaisohjaus"><a>Katso tarkempi ohjeistus täältä!</a></Link>.</p>

    </BasicLayout>
  );
}

