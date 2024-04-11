// Hooks
import Image from 'next/image';

// Styling
import Styles from './hqSection.module.css';
import {Fraunces } from "next/font/google";

// Images
import IconUk from '@/public/images/about/desktop/illustration-uk.svg';
import IconCanada from '@/public/images/about/desktop/illustration-canada.svg';
import IconAustralia from '@/public/images/about/desktop/illustration-australia.svg';


const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })


 export default function HqSection() {
   return (
     <section>
      <h4 className={`${fraunces.className} ${Styles.title}`}>Our headquarters</h4>
      <div className={Styles.hqFlexContainer}>
        <div className={Styles.hqCard}>
          <Image src={IconUk} alt="icon hq-uk"/>
          <h5 className={`${fraunces.className} ${Styles.cardTitle}`}>United Kingdom</h5>
          <ul className={Styles.adressList}>
            <li className={Styles.adress}>68 Asfordby Rd</li>
            <li className={Styles.adress}>Alcaston</li>
            <li className={Styles.adress}>SY61YA</li>
            <li className={Styles.adress}>+44 1241918425</li>
          </ul>
        </div>
        <div className={Styles.hqCard}>
          <Image src={IconCanada} alt="icon hq-canada"/>
          <h5 className={`${fraunces.className} ${Styles.cardTitle}`}>Canada</h5>
          <ul className={Styles.adressList}>
            <li className={Styles.adress}>1528 Eglinton Avenue</li>
            <li className={Styles.adress}>Toronto</li>
            <li className={Styles.adress}>Ontario M4P 1A6</li>
            <li className={Styles.adress}>+1 416 4852997</li>
          </ul>
        </div>
        <div className={Styles.hqCard}>
          <Image src={IconAustralia} alt="icon hq-australia"/>
          <h5 className={`${fraunces.className} ${Styles.cardTitle}`}>Australia</h5>
          <ul className={Styles.adressList}>
            <li className={Styles.adress}>36 Swantson Street</li>
            <li className={Styles.adress}>Kewell</li>
            <li className={Styles.adress}>Victoria</li>
            <li className={Styles.adress}>+61 4 99283629</li>
          </ul>
        </div>
      </div>
     </section>
   )
 }
