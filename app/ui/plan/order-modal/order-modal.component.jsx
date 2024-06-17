import IconClose from '../../icons/icon-close';
import Button from '../../shared/button/button.component';
import Styles from './order-modal.module.css';
import { barlow } from '@/app/utils/fonts';
import { useContext } from 'react';

import { ModalContext } from '@/app/_lib/providers/modal.provider';

export default function OrderModal({category, beanType, quantity, grounding, frequenty, toggleModal}) {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  return (
    <div className={Styles.orderModal}>
      <div className={Styles.closeBtn} onClick={() => setIsModalOpen(false)}>
         <IconClose />
       </div>
      <div className={Styles.orderModalCard}>
        <div className={Styles.orderModalHeader}>
          <h2>Order Summary</h2>

        </div>

        <div className={Styles.orderModalContent}>
          <blockquote className={`${barlow.className} ${Styles.blockQuote}`}>&ldquo; I drink my coffee as <span className={Styles.highLightedText}>{category}</span>, with a <span className={Styles.highLightedText}>{beanType}</span> type of bean. <span className={Styles.highLightedText}>{quantity}</span> ground ala <span className={Styles.highLightedText}>{grounding}</span>, send to me <span className={Styles.highLightedText}>{frequenty}</span>&rdquo; </ blockquote>

        <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>

         <div className={Styles.checkout}>
           <span className={Styles.checkoutPrice}>$14.00 / mo</span>
           <Button buttonType='modal'>Checkout</Button>
         </div>

        </div>
      </div>
    </div>
  )
};
