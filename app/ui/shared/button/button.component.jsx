import React, {useContext} from 'react';
import Styles from './button.module.css';
import {fraunces } from "../../../utils/fonts";
import { ModalContext } from '@/app/_lib/providers/modal.provider';


 const BUTTON_TYPE_CLASSES = {
  heroButton: 'hero',
  submitButton: "submit",
  modalButton: "modal",
  disabledButton: "disabled"
};

 const Button = ({children, disabled, link, buttonType}) => {
  const {setIsModalOpen } = useContext(ModalContext);

  const buttonStyle = () => {
    return disabled ? Styles.btnDisabled : Styles.btnDefault
  }

  const handleClick = () => {
    if(buttonType === 'modal'){
      setIsModalOpen(false);
    }
  }

  return (

    <button
    className={`${Styles.btn} ${Styles.btnDefault} ${fraunces.className}`}
    disabled={disabled}
    type={BUTTON_TYPE_CLASSES[buttonType]}
    onClick={handleClick}

    >{children}</button>
  )
}

export default Button;
