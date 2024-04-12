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

  const buttonStyle = () => {
    return disabled ? Styles.btnDisabled : Styles.btnDefault
  }



  return (

    <Link
      href={link}
      className={`${Styles.btn} ${buttonStyle(disabled)} ${fraunces.className}`}
      disabled={disabled}
    >{children}</Link>
  )
}

export default Button;
