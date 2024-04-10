import Styles from './hero.module.css'
import {Fraunces } from "next/font/google";
import Button from '../button/button.component';

const fraunces = Fraunces({
 subsets: ["latin"],
 weight: [ '300', '700'],
 display: 'swap',
})


const HeroComponent = ({ backgroundImage }) => {

  return (
    <div className="container">
      <header className={Styles.header} style={{ backgroundImage: `url(${backgroundImage.src})` }}>
        <div className={Styles.headerContent}>
          <h1 className={`${Styles.headerTitle} ${fraunces.className}`}> Great coffee made simple.</h1>
          <span className={Styles.headerMessage}>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</span>
          <Button
            disabled={false}
            className={"btnDisabled"}
            link={"/plan"}
            >Get your plan</Button>
        </div>
      </header>
    </div>
  )
}

export default HeroComponent;
