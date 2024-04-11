// Hooks
import Image from 'next/image';

// Styling
import Styles from './qualitySection.module.css';
import {Fraunces } from "next/font/google";
import QualityImage from '@/public/images/about/desktop/image-quality.jpg';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })

export default function QualitySection() {
  return (
    <section >
      <div className={Styles.qualityContainer}>
        <div className={Styles.qualityContent}>
          <h3 className={`${fraunces.className} ${Styles.title}`}>Uncompromising quality</h3>
          <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
        <Image className={Styles.qualityImage} src={QualityImage} alt="Quality cup with capuchio in the shape of a tulip"/>
      </div>
    </section>
  )
}
