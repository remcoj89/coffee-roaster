// Styling
import {Fraunces } from "next/font/google";
import Styles from '../ui/shared/hero/hero.module.css';
import BackgroundImage from '@/public/images/plan/desktop/image-hero-blackcup.jpg';
// Components
import Navbar from '../ui/shared/navbar/navbar.component.jsx';
import Header from '../ui/shared/hero/hero.component.jsx';
import Footer from '../ui/shared/footer/footer.component.jsx';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })


export default function page() {
  return (
    <>
      <Navbar />
      <Header backgroundImage={BackgroundImage}>
        <div className={Styles.headerContent}>
          <h1 className={`${Styles.headerTitle} ${fraunces.className}`}>Create a plan</h1>
          <span className={Styles.headerMessage}>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</span>
        </div>
      </Header>
      <main className='container'>Select plan</main>
      <Footer />
    </>
  )
}
