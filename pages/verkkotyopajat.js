import BasicLayout from '../layouts/basic'
import Link from 'next/link'

export default function Page() {
  return (
    <BasicLayout title="Kehitystön verkkotyöpajat">
      <h2>Verkkotyöpaja: Tukea tavoitteisiin tapojen voimalla</h2>

      <p>Työpajassa tutustutaan tapojen muodostamisen teoriaan ja otetaan ensimmäiset askeleet tavoitteitasi tukevien tapojen määrittämiseen ja muodostamiseen.</p>
      <p><Link href="/verkkotyopaja-tukea-tavoitteisiin-tapojen-voimalla"><a>Tutustu työpajaan tarkemmin täältä.</a></Link></p>
    </BasicLayout>
  );
}