// Styling
import {Fraunces } from "next/font/google";
import Styles from '../ui/shared/hero/hero.module.css';
import BackgroundImage from '@/public/images/about/desktop/image-hero-whitecup.jpg';
// Components
import Navbar from '../ui/shared/navbar/navbar.component.jsx';
import Header from '../ui/shared/hero/hero.component.jsx';
import OurCommitmentSection from "../ui/about/our-commitment-section/our-commitment.section";
import QualitySection from "../ui/about/quality-section/qualitySection.component.jsx";
import HqSection from "../ui/about/hq-section/hqSection.component.jsx";
import Footer from '../ui/shared/footer/footer.component.jsx';


const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })

export default function About() {
  return (
    <>
      <Navbar />
      <Header backgroundImage={BackgroundImage}>
        <div className={Styles.headerContent}>
          <h1 className={`${Styles.headerTitle} ${fraunces.className}`}>About us</h1>
          <span className={Styles.headerMessage}>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</span>
        </div>
      </Header>
      <main className="container">
        <OurCommitmentSection />
        <QualitySection />
        <HqSection />
      </main>
      <Footer />
    </>
  )
}
