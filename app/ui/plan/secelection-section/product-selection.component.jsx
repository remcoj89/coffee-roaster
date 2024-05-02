// Hooks
import React from 'react'

// Styles
import Styles from './product-selection.module.css';

// Components
import SelectionNavigation from '../selection-navigation/selection-navigation.component';
import SelectionForm from '../selection-form/selection-form.component';

export default function productSelectionComponent() {
  return (
    <section>
      <div className={Styles.flexContainer}>
        <SelectionNavigation />
        <div className={Styles.mainContainer}>
          <SelectionForm />
        </div>
      </div>
    </section>
  )
}
