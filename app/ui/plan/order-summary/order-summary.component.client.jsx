'use client';

// Hooks
import React from 'react';

// Styles
import Styles from './order-summary.module.css';
import {Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ['700'],
  display: 'swap',
 })

export default function orderSummary() {

  const wayOfDrinking = "";
  const typeOfBean = "";
  const quantity = 0;
  const frequenty = ""


  return (
    <div className={Styles.orderSummary}>
      <span className={Styles.title}>order summary</span>
      <p className={fraunces.className}>
        &quot;I drink my coffee using <span className={Styles.orderInput}>{wayOfDrinking}</span>, with a <span className={Styles.orderInput}>{typeOfBean}</span>, type of bean.
        <span className={Styles.orderInput}>{quantity}</span>, sent to me <span className={Styles.orderInput}>{frequenty}</span>.&quot;
      </p>
    </div>
  )
}
