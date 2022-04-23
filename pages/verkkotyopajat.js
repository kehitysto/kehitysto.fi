import BasicLayout from '../layouts/site-simple-page'
import Link from 'next/link'

// <h2>Verkkotyöpaja: Tukea tavoitteisiin tapojen voimalla</h2>

// <p>Työpajassa tutustutaan tapojen muodostamisen teoriaan ja otetaan ensimmäiset askeleet tavoitteitasi tukevien tapojen määrittämiseen ja muodostamiseen.</p>
// <p><Link href="/verkkotyopaja-tukea-tavoitteisiin-tapojen-voimalla"><a>Tutustu työpajaan tarkemmin täältä.</a></Link></p>

export default function Page() {
  return (
    <BasicLayout title="Kehitystön verkkotyöpajat">

      <h2>Verkkotyöpaja: Konkretisoi elämäsi suunta</h2>

      <p>Työpajassa käydään läpi sitä mikä on ollut edellisen vuoden aikana myönteisellä tai kielteisellä tavalla merkityksellistä, ja millaisia asioita haluaisi elämäänsä enemmän tai vähemmän. </p>
      <p><Link href="/verkkotyopaja-konkretisoi-elamasi-suunta"><a>Tutustu työpajaan tarkemmin täältä.</a></Link></p>

    </BasicLayout>
  );
}