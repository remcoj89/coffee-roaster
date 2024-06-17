'use client';

// Hooks
import React from 'react';
import {Fraunces } from "next/font/google";

// Styles
import Styles from './order-summary.module.css';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ['700'],
  display: 'swap',
 })

export default function orderSummary({category, beanType, quantity, grounding, frequenty}) {


  return (
    <div className={Styles.orderSummary}>
      <span className={Styles.title}>order summary</span>
      <p className={fraunces.className}>
        &quot;I drink my coffee using <span className={Styles.orderInput}>{category}</span>, with a <span className={Styles.orderInput}>{beanType}</span>, type of bean.
        <span className={Styles.orderInput}> {quantity}</span> ground ala  <span className={Styles.orderInput}>{grounding}</span>, sent to me <span className={Styles.orderInput}>{frequenty}</span>.&quot;
      </p>
    </div>
  )
}
