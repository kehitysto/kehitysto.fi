import BasicLayout from '../layouts/site-simple-page';
import Link from 'next/link';

const title = 'Kokoontuminen: Ryhmävertaisohjaus';

export default function Page() {
  return (
    <BasicLayout title={title}>

      <h1>Hienoa että olet kiinnostunut kokoontumisen järjestämisestä!</h1>

      <p>Tältä sivulta löytyy muutama linkki <strong>Ryhmävertaisohjaus</strong> -kokoontumisen materiaaleihin.</p>

      <h2>Ryhmävertaisohjaus -materiaalit</h2>

      <h3>Kokoontumisen vetäjän ohjeet</h3>

      <p>Kokoontumisen pariaatteista ja rungosta muistutava ohje löytyy <a href="https://docs.google.com/document/d/1Qz4L9ZDNYmkqPd26H_u5j7e2fSIPbQUUmeC5Y1Srspo/edit?usp=sharing">täältä</a>.</p>

      <h3>Ohjauksen runko ohjattavalle</h3>

      <p>Ohjattavan käyttöön tarkoitettu tuloste, jossa GROW-mallin askeleet on alustettu lyhyesti löytyy <a href="https://docs.google.com/document/d/18kfg8mC5UXgi8eTlgJ9dgUd6S5ps0-m-YTXSEv-Jbs4/edit?usp=sharing">täältä</a>.</p>

      <h3>Esimerkkikysymyksiä ohjaajille</h3>

      <p>Ohjaajan roolissa toimivalle ihmiselle tarkoitettu tuloste, joka tarjoaa kootusti hyviä kysymyksiä, joiden avulla ohjattavaa voi auttaa prosessissa eteenpäin löytyy <a href="https://docs.google.com/document/d/1t7_OOTc22AQBnflIGUsur5osLitli8LkaXrmIAPMpp0/edit?usp=sharing">täältä</a>.</p>

      <h3>Apuväline mainosbannereiden tekoon</h3>

      <p>Apuväline mainosbannerin tekemiseen <Link href="/cover-image-generator/index.html"><a>täällä</a></Link> (testattu toimivaksi Google Chromella).</p>

    </BasicLayout>
  );
}


