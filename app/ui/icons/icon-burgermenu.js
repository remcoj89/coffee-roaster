import React from 'react';
import Image from 'next/image';
import IconHamburger from '@/public/images/shared/mobile/icon-hamburger.svg';

const IconBurgerMenu = () => {
  return (
    <Image src={IconHamburger} alt="burger menu" />
  )
}

export default IconBurgerMenu;
