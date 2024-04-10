import React from 'react';
import Link from 'next/link'
import Styles from './button.module.css';
import {Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '700'],
  display: 'swap',
 })

 const Button = ({children, disabled, link }) => {

  return (
    <Link
      href={link}
      className={`${Styles.btn} ${Styles.btnDefault } ${fraunces.className}`}
      disabled={disabled}
    >{children}</Link>
  )
}

export default Button;
