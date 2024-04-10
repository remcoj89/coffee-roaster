import Button from '../../shared/button/button.component';
import Styles from './how-it-works.module.css';
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '700'],
  display: 'swap',
 })


export default function howItWorksSection() {
  return (
    <section>
      <div className={Styles.howItWorks}>
        <h4 className={ fraunces.className}>How it works</h4>
        <div className={Styles.separationLine}>
          <div className={Styles.circle} />
          <div className={Styles.line} />
          <div className={Styles.circle} />
          <div className={Styles.line} ></div>
          <div className={Styles.circle} />
        </div>
        <div className={Styles.howItWorksGrid}>
          <div className={Styles.howItWorksGridItem}>
            <span className={`${Styles.gridItemNumber} ${fraunces.className}`}>01</span>
            <h4 className={ fraunces.className}>Pick your coffee</h4>
            <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and  pay fair prices for them There are new coffees in all profiles every month for you to try out.</p>
          </div>

          <div className={Styles.howItWorksGridItem}>
            <span className={`${Styles.gridItemNumber} ${fraunces.className}`}>02</span>
            <h4 className={ fraunces.className}>Choose the freaquency</h4>
            <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
          </div>

          <div className={Styles.howItWorksGridItem}>
            <span className={`${Styles.gridItemNumber} ${fraunces.className}`}>03</span>
            <h4 className={ fraunces.className}>Receive and enjoy!</h4>
            <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
          </div>
        </div>
        
        <Button
            disabled={false}
            className={"btnDisabled"}
            link={"/plan"}
            >Create your plan</Button>
      </div>
    </section>
  )
}
