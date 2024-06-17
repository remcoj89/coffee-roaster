/* eslint-disable react-hooks/rules-of-hooks */
'use client';
// Hooks
import React, {useState, useContext} from 'react'
import Image from 'next/image';

// Context Porviders
import { SelectedPlanContext } from '@/app/_lib/providers/selection-plan.provider';

// Styling
import Styles from './selection-form-input.module.css';
import {Fraunces } from "next/font/google";

// Components
import ArrowIcon from '@/public/images/plan/desktop/icon-arrow.svg';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ['700'],
  display: 'swap',
 })

export default function selectionFormInput({dataList, selection}) {
  const {id, title, category, options, folded} = dataList
  const [option1, option2, option3] = options

  const [isFolded, setIsFolded] = useState(folded);
  const [option1Selected, setOption1Selected] = useState(option1.isSelected)
  const [option2Selected, setOption2Selected] = useState(option2.isSelected)
  const [option3Selected, setOption3Selected] = useState(option3.isSelected)

  const {setQuestionToAnswerIndex} = useContext(SelectedPlanContext);

  const toggleFolded = () => {
    setIsFolded(!isFolded);
    setQuestionToAnswerIndex(id)
  }



  const handeleOptionSelection = (option) => {
    switch(option) {
      case 1:
        setOption1Selected(true);
        setOption2Selected(false)
        setOption3Selected(false)
        selection(option1.title, category);
      break;
      case 2:
        setOption1Selected(false);
        setOption2Selected(true)
        setOption3Selected(false)
        selection(option2.title, category);
      break;
      case 3:
        setOption1Selected(false);
        setOption2Selected(false)
        setOption3Selected(true)
        selection(option3.title, category);
      break;
    }
  }

  return (
   <div className={Styles.formField} id={category}>

      <label className={`${Styles.fieldLabel} ${fraunces.className}`} htmlFor={category} onClick={() => toggleFolded(id)}>
        <span  >{title}</span>
        <Image
          className={Styles.iconArrow}
          style={isFolded? { animation: "rotateArrow" } : { animation: "rotateArrowBack" }}
          src={ArrowIcon} alt=""/>
      </label>


      <div className={Styles.inputField} style={  isFolded ? {display: 'none'} : {display: 'flex'}}>
        <label htmlFor={option1.id}
          className={`${Styles.optionsCard} ${option1Selected ? Styles.active : ""}`}>{option1.title}
          <input
            id={option1.title}
            type="radio"
            name={title}
            value={option1.title}
            onChange={() => handeleOptionSelection(1)}
            />
          <p>{option1.description}</p>
        </label>

        <label htmlFor={option2.id}
          className={`${Styles.optionsCard} ${option2Selected ? Styles.active : ""}`}>{option2.title}
          <input
            id={option2.id}
            type="radio"
            name={title}
            value={option2.title}
            onChange={() => handeleOptionSelection(2)}
            />
          <p>{option2.description}</p>
        </label>

        <label htmlFor={option3.id}
          className={`${Styles.optionsCard} ${option3Selected ? Styles.active : ""} `}>{option3.title}
          <input
            id={option3.id}
            type="radio"
            name={title}
            value={option3.title}
            onChange={() => handeleOptionSelection(3)}
            />
          <p>{option3.description}</p>
        </label>
      </div>

  </div>
  )
}
