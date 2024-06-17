'use client';

import { createContext, useState} from 'react';

export const SelectedPlanContext = createContext({})


export const SelectedPlanProvider = ({children}) => {
  const [questionToAnswerIndex, setQuestionToAnswerIndex] = useState(null);
  const [categorySelected, setCategorySelected] = useState("_____");
  const [beanTypeSelected, setBeanTypeSelected] = useState("_____");
  const [quantitySelected, setQuantitySelected] = useState("_____");
  const [groundingMethodSelected, setGroundingMethodSelected] = useState("_____");
  const [frequencySelected, setFrequencySelected] = useState("_____");
  const [orderSummary, setOrderSummary] = useState({});

  const value = {
    questionToAnswerIndex,
    setQuestionToAnswerIndex,
    categorySelected,
    setCategorySelected,
    beanTypeSelected,
    setBeanTypeSelected,
    quantitySelected,
    setQuantitySelected,
    groundingMethodSelected,
    setGroundingMethodSelected,
    frequencySelected,
    setFrequencySelected,
    orderSummary,
    setOrderSummary,
  }

  return <SelectedPlanContext.Provider value={value} >{children}</SelectedPlanContext.Provider>
}
