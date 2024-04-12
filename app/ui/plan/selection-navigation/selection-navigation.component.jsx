// Hooks
import React from 'react'

// Styles
import Styles from './selection-navigation.module.css';
import {Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })


export default function selectionNavigation() {
  return (
    <aside className={Styles.secelectionNavMenu}>
      <ul className={`${Styles.selectionNavList} ${fraunces.className}`}>
        <li className={`${Styles.selectionNavListItem} ${Styles.listItemActive}`}>
          <span className={`${Styles.listNumber} ${Styles.listNumberSelected}`}>01</span> Preferences
        </li>
        <li className={`${Styles.selectionNavListItem} ${Styles.listItemDeActivated}`}>
          <span className={`${Styles.listNumber}`}>02</span> Bean Type
        </li>
        <li className={`${Styles.selectionNavListItem}`}>
          <span className={`${Styles.listNumber}`}>03</span> Quantity
        </li>
        <li className={`${Styles.selectionNavListItem}`}>
          <span className={`${Styles.listNumber}`}>04</span> Grind Option
        </li>
        <li className={`${Styles.selectionNavListItem}`}>
          <span className={`${Styles.listNumber} ${Styles.listNumberActive}`}>05</span> Deliveries
        </li>
      </ul>
    </aside>
  )
}
