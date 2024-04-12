// Hooks
import React from 'react'

// Styles
import Styles from './product-selection.module.css';

// Components
import SelectionNavigation from '../selection-navigation/selection-navigation.component';
import OrderSummary from '../order-summary/order-summary.component.client';
import Button from '../../shared/button/button.component';

export default function productSelectionComponent() {
  return (
    <section>
      <div className={Styles.flexContainer}>
        <SelectionNavigation />
        <div className={Styles.mainContainer}>
          <OrderSummary />
          <Button link={"#"} disabled={true}>Create my plan!</Button>
        </div>
      </div>
    </section>
  )
}
