// Styling
import {Fraunces } from "next/font/google";
import Styles from './ui/shared/hero/hero.module.css';
import backgroundImage from '@/public/images/home/desktop/image-hero-coffeepress.jpg';

// Components
import Navbar from "./ui/shared/navbar/navbar.component.jsx";
import Header from "./ui/shared/hero/hero.component.jsx";
import OurCollectionSection from "./ui/home/our-collection-section/our-collection.section.jsx";
import WhyChooseUsSection from "./ui/home/why-choose-us-section/why-choose-us.section.jsx";
import HowItWorksSection from "./ui/shared/sections/how-it-works-section/how-it-works-section.jsx";
import Footer from "./ui/shared/footer/footer.component.jsx";
import Button from './ui/shared/button/button.component.jsx';


const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })


export default function Home() {
  return (
    <>
      <Navbar />
      <Header backgroundImage={backgroundImage}>
      <div className={Styles.headerContent}>
        <h1 className={`${Styles.headerTitle} ${fraunces.className}`}> Great coffee made simple.</h1>
        <span className={Styles.headerMessage}>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</span>
        <Button
          disabled={false}
          className={"btnDisabled"}
          link={"/plan"}
          >Get your plan</Button>
        </div>
      </Header>
      <main className="container">
          <OurCollectionSection />
          <WhyChooseUsSection />
          <HowItWorksSection >
          <Button
            disabled={false}
            className={"btnDisabled"}
            link={"/plan"}
            >Create your plan</Button>
          </HowItWorksSection>
      </main>
      <Footer />
    </>
  );
}
