'use client';

import React from 'react';
import Image from 'next/image';
import IconCoffeeBean from '@/public/images/home/desktop/icon-coffee-bean.svg';

import Styles from './why-choose-use.module.css';
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '700'],
  display: 'swap',
 })


export default function whyChooseUsSection() {

  return (
    <section id={Styles.chooseUsSection} >
      <div className={Styles.whyChooseUs}>
        <div className={Styles.whyChooseUsHero}>
          <h2 className={fraunces.className}>Why choose us?</h2>
          <p>A large part of our role is choosing which particular coffees will be featured
             in our range. This means working closely with the best coffee growers to give
             you a more impactful experience on every level.
          </p>
          <div className={Styles.whyChooseUsGrid}>
            <div className={Styles.whyChooseUsGridItem}>
              <Image className={Styles.whyChoosUsGridItemImage} src={IconCoffeeBean} alt="icon coffee bean best quallity" />
              <div className={Styles.gridTextBlock}>
                <h3 className={fraunces.className}>Best quality</h3>
                <span>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</span>
              </div>
            </div>
            <div className={Styles.whyChooseUsGridItem}>
              <Image className={Styles.whyChoosUsGridItemImage} src={IconCoffeeBean} alt="icon coffee bean best quallity" />
              <div className={Styles.gridTextBlock}>
                <h3 className={fraunces.className}>Best quality</h3>
                <span>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</span>
              </div>
            </div>
            <div className={Styles.whyChooseUsGridItem}>
              <Image className={Styles.whyChoosUsGridItemImage} src={IconCoffeeBean} alt="icon coffee bean best quallity" />
              <div className={Styles.gridTextBlock}>
                <h3 className={fraunces.className}>Best quality</h3>
                <span>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
