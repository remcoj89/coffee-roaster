'use client';

// Hooks
import React, {useContext} from 'react'
import { SelectedPlanContext } from '@/app/_lib/providers/selection-plan.provider';
// Styles
import Styles from './selection-navigation.module.css';
import {Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })


 export default function SelectionNavigation() {
  const {questionToAnswerIndex} = useContext(SelectedPlanContext);

  return (
    <aside className={Styles.secelectionNavMenu}>
      <ul className={`${Styles.selectionNavList} ${fraunces.className}`}>
        <li className={`${Styles.selectionNavListItem} ${questionToAnswerIndex === 0 ? Styles.listItemActive : ""}`}>
          <span className={`${Styles.listNumber} ${questionToAnswerIndex === 0 ? Styles.listNumberSelected : ""}`}>01</span> Preferences
        </li>
        <li className={`${Styles.selectionNavListItem} ${questionToAnswerIndex === 1 ? Styles.listItemActive : ""}`}>
          <span className={`${Styles.listNumber} ${questionToAnswerIndex === 1 ? Styles.listNumberSelected : "" }`}>02</span> Bean Type
        </li>
        <li className={`${Styles.selectionNavListItem} ${questionToAnswerIndex === 2 ? Styles.listItemActive : ""}`}>
          <span className={`${Styles.listNumber} ${questionToAnswerIndex === 2 ? Styles.listNumberSelected : "" }`}>03</span> Quantity
        </li>
        <li className={`${Styles.selectionNavListItem}`}>
          <span className={`${Styles.listNumber} ${Styles.listItemDeActivated}`}>04</span> Grind Option
        </li>
        <li className={`${Styles.selectionNavListItem} ${questionToAnswerIndex === 4 ? Styles.listItemActive : ""}`}>
          <span className={`${Styles.listNumber} ${questionToAnswerIndex === 4 ? Styles.listNumberSelected : "" }`}>05</span> Deliveries
        </li>
      </ul>
    </aside>
  )
}
