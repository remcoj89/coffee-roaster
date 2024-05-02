/* eslint-disable react-hooks/rules-of-hooks */
'use client';
// Hooks
import React, {useState} from 'react'

import Image from 'next/image';
import {Fraunces } from "next/font/google";

// Styling
import Styles from './selection-form-input.module.css';
// Components
import ArrowIcon from '@/public/images/plan/desktop/icon-arrow.svg';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ['700'],
  display: 'swap',
 })

export default function selectionFromInput({props, onChange}) {
  const {id, name, title, options} = props
  const [option1, option2, option3] = options

  const [isFormFieldOpen, setIsFormFieldOpen] = useState(false)




  const toggleFormField = () => {
    setIsFormFieldOpen(!isFormFieldOpen)
  }
  return (
    <div className={Styles.formField} id="preferences">

      <label className={`${Styles.fieldLabel} ${fraunces.className}`} htmlFor="preferences" onClick={toggleFormField}>
        <span>{title}</span>
        <Image className={Styles.iconArrow} src={ArrowIcon} alt=""/>
      </label>


      <div className={Styles.inputField} style={isFormFieldOpen ? {display: 'flex'} : {display: 'none'}}>
        <label htmlFor={option1.id}
          className={`${Styles.optionsCard} ${option1.isSelected ? Styles.active : ""}`}>{option1.title}
          <input
            id={option1.id}
            type="radio"
            name={option1.title}
            value={option1.title}
            onChange={onChange}
            checked={option1.isSelected}
            />
          <p>{option1.description}</p>
        </label>

        <label htmlFor={option2.id}
          className={`${Styles.optionsCard} ${option2.isSelected ? Styles.active : ""}`}>{option2.title}
          <input
            id={option2.id}
            type="radio"
            name={option2.title}
            value={option2.title}
            onChange={onChange}
            checked={option2.isSelected}
            />
          <p>{option2.description}</p>
        </label>

        <label htmlFor={option3.id}
          className={`${Styles.optionsCard} ${option3.isSelected ? Styles.active : ""} `}>{option3.title}
          <input
            id={option3.id}
            type="radio"
            name={option3.title}
            value={option3.title}
            onChange={onChange}
            checked={option3.isSelected}
            />
          <p>{option3.description}</p>
        </label>
      </div>

  </div>
  )
}
