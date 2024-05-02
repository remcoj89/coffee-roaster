/* eslint-disable react-hooks/rules-of-hooks */
// Hookds
'use client';
// Hooks
import React, {useState, useEffect} from 'react'

import data from '../../../_lib/data/form-data.json';

// Styling
import Styles from './selection-form.module.css';
// Components
import SelectionFormInput from '../selection-form-input/selection-from-input.component';
import OrderSummary from '../order-summary/order-summary.component.client';
import Button from '../../shared/button/button.component';



export default function selectionForm() {

  const [formData, setFormData] = useState([])
  const [selectedInput, setSelectedInput] = useState("")


  useEffect(() => {
    setFormData(data);
  }, []);

  const onOptionChange = (e) => {
    setSelectedInput(e.target.value)
  }

  return (
    <form className={Styles.form}>
     {formData.map((field, i) => (
        <SelectionFormInput props={field} onChange={onOptionChange} index={i} key={i} />
      ))}

      <OrderSummary />
      <Button link={"#"} disabled={true}>Create my plan!</Button>
    </form>
  )
}
