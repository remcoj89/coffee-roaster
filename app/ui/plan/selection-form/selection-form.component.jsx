/* eslint-disable react-hooks/rules-of-hooks */
// Hookds
'use client';
// Hooks
import React, {useState, useContext, } from 'react'

// Context Porviders
import { SelectedPlanContext } from '@/app/_lib/providers/selection-plan.provider';
import { ModalContext } from '@/app/_lib/providers/modal.provider';

// Styling
import Styles from './selection-form.module.css';
// Components
import SelectionFormInput from '../selection-form-input/selection-form-input.component'
import OrderSummary from '../order-summary/order-summary.component.client';
import OrderModal from '../order-modal/order-modal.component';
import Button from '../../shared/button/button.component';



export default function selectionForm() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const initialFields = [
    {
      "id": 0,
      "title": "How do you drink your coffee?",
      "category": "Preferences",
      "folded": true,
      "disabled": false,
      "navDisabled": false,
      "currendNav": false,
      "options": [
         {
          "title": "Capsule",
          "description": "Compatible with nespresso systems and similar brewers",
          "isSelected": false
          },
          {
          "title": "Filter",
          "description": "For pour over or drip methods like Aeropress, Chemex, and V60",
          "isSelected": false
          },
          {
          "title": "Espresso",
          "description": "Dense and finely ground beans for an intense, flavourful experience",
          "isSelected": false
          }
       ]
      },
      {
      "id": 1,
      "title": "What type of coffee?",
      "category": "Bean Type",
      "folded": true,
      "disabled": false,
      "navDisabled": false,
      "currendNav": false,
      "options": [
          {
            "title": "Single Origin",
            "description": "Distinct, high quality coffee from a specific family-owned farm",
            "isSelected": false
          },
             {
            "id": 1.1,
            "title": "Decaf",
            "description": "Just like regular coffee, exept the caffeine has been removed",
            "isSelected": false
          },
          {
            "id": 1.2,
            "title": "Blended",
            "description": "Combination of two or three dark roasted beans of organic coffees",
            "isSelected": false
          }
        ]
      },
      {
      "id": 2,
      "title": "How much would you like?",
      "category": "Quantity",
      "folded": true,
      "disabled": false,
      "navDisabled": false,
      "currendNav": false,
      "options": [
        {
          "title": "250g",
          "description": "Perfect for the solo drinker. Yields about 12 delecious cups.",
          "isSelected": false
        },
       {
          "title": "500g",
          "description": "Perfect option for a couple. Yields about 40 delectable cups.",
          "isSelected": false
        },
        {
          "title": "1000g",
          "description": "Perfect for offices and events. Yields about 90 delightful cups.",
          "isSelected": false
        }
        ]
      },
      {
        "id": 3,
        "title": "Want us to grind them?",
        "category": "Grind Option",
        "folded": true,
        "disabled": false,
        "navDisabled": false,
        "currendNav": false,
        "options": [
         {
           "title": "Wholebean",
           "description": "Best choice if you cherish the full sensory experience",
           "isSelected": false
         },
         {
           "title": "Filter",
           "description": "For drip or pour-over coffee methods such as V60 or Aeropress",
           "isSelected": false
         },
         {
           "title": "Cafetiére",
           "description": "Course ground beans specially suited for french press coffee",
           "isSelected": false
         }
        ]
      },
      {
        "id": 4,
        "title": "How often should we deliver?",
        "category": "Deliverie",
        "folded": true,
        "disabled": false,
        "navDisabled": false,
        "currendNav": false,
        "options": [
          {
            "title": "Every week",
            "description": "$7.20 per shipment. Includes free first-class shipping.",
            "isSelected": false
          },
          {
            "title": "Every 2 weeks",
            "description": "$9.60 per shipment. Includes free priority shipping.",
            "isSelected": false
          },
          {
            "title": "Every month",
            "description": "$12.00 per shipment. Includes free priority shipping.",
            "isSelected": false
          }
        ]
      }
  ]

  const [fields, setFields] = useState(initialFields)


  const {
    categorySelected,
    beanTypeSelected,
    quantitySelected,
    groundingMethodSelected,
    frequencySelected,
    setCategorySelected,
    setBeanTypeSelected,
    setQuantitySelected,
    setGroundingMethodSelected,
    setFrequencySelected,
  } = useContext(SelectedPlanContext);

   const handleSelection = (selectionInput, category) => {
     switch(category) {
      case "Preferences":
        setCategorySelected(selectionInput);
      break;
      case "Bean Type":
        setBeanTypeSelected(selectionInput);
      break;
      case "Quantity":
        setQuantitySelected(selectionInput);
      break;
      case "Grind Option":
        setGroundingMethodSelected(selectionInput);
      break;
      case "Deliverie":
        setFrequencySelected(selectionInput);
      break;
     }
   }

   const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setFields(initialFields);
    setIsModalOpen(!isModalOpen)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (

<form onSubmit={handleFormSubmit} className={Styles.form}>

  {fields.map((field, i) => {
   return (
    <SelectionFormInput
      key={i}
      dataList={field}
      selection={handleSelection}
    />
   )
    })}

  <OrderSummary
    category={categorySelected}
    beanType={beanTypeSelected}
    quantity={quantitySelected}
    grounding={groundingMethodSelected}
    frequenty={frequencySelected}
    />

    <div className={Styles.submitBtnWrapper}>
      <Button type="submitButton">Create my plan!</Button>
    </div>

  {isModalOpen && (
  <OrderModal
    category={categorySelected}
    beanType={beanTypeSelected}
    quantity={quantitySelected}
    grounding={groundingMethodSelected}
    frequenty={frequencySelected}
  />
)
}
</form>


  )
}
