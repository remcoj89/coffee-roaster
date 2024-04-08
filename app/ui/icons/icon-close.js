import React from 'react';
import Image from 'next/image';
import CloseIcon from "@/public/images/shared/mobile/icon-close.svg"

const IconClose = () => {
  return (
    <Image src={CloseIcon} alt="icon close" />
  )
}

export default IconClose;
