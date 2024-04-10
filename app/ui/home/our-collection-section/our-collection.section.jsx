import Styles from './our-collection.module.css';
import Image from 'next/image';
import ImageGranEspresso from '@/public/images/home/desktop/image-gran-espresso.png';
import ImagePlanalto from '@/public/images/home/desktop/image-planalto.png';
import ImagePiccollo from '@/public/images/home/desktop/image-piccollo.png';
import ImageDanche from '@/public/images/home/desktop/image-danche.png';
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '700'],
  display: 'swap',
 })


export default function ourCollectionSection() {
  return (
    <section>
      {/* Background */}
      <span className={`${Styles.sectionBackground} ${fraunces.className}`}>our collection</span>

      {/* collection grid */}
      <div className={Styles.ourCollectionGrid}>
        <div className={Styles.ourCollectionGridItem}>
          <Image
          src={ImageGranEspresso}
          alt="Gran Espresso"
          className={Styles.ourCollectionGridItemImage}
          />
          <div className={Styles.ourCollectionGridItemContent}>
            <h2 className={fraunces.className}>Gran Espresso</h2>
            <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
          </div>
        </div>
        <div className={Styles.ourCollectionGridItem}>
          <Image
          src={ImagePlanalto}
          alt="Planalto"
          className={Styles.ourCollectionGridItemImage}
          />
          <div className={Styles.ourCollectionGridItemContent}>
            <h2 className={fraunces.className}>Planalto</h2>
            <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
          </div>
        </div>

        <div className={Styles.ourCollectionGridItem}>
          <Image
          src={ImagePiccollo}
          alt="Piccollo"
          className={Styles.ourCollectionGridItemImage}
          />
          <div className={Styles.ourCollectionGridItemContent}>
            <h2 className={fraunces.className}>Piccollo</h2>
            <p>Mild and smooth blend featuring notes of toasted almond and dried cherry </p>
          </div>
        </div>
        <div className={Styles.ourCollectionGridItem}>
          <Image
          src={ImageDanche}
          alt="Danche"
          className={Styles.ourCollectionGridItemImage}
          />
          <div className={Styles.ourCollectionGridItemContent}>
            <h2 className={fraunces.className}>Danche</h2>
            <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
