// Hooks
import Image from 'next/image';

// Styling
import {Fraunces } from "next/font/google";
import Styles from './our-commitment.module.css';
import CommitmentImage from '@/public/images/about/desktop/image-commitment.jpg';


const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })


export default function ourCommitmentComponent() {
  return (
    <section>
      <div className={Styles.flexContainer}>
        <Image src={CommitmentImage} alt="Coffee Roasters Barista stirs coffee" className={Styles.commitmentImage} />
        <div className={Styles.commitment}>
          <h2 className={`${Styles.commitmentTitle} ${fraunces.className}`}>Our commitment</h2>
          <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>
      </div>
    </section>
  )
}
