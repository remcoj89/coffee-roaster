'use client';

import React, {createContext, useState} from 'react';

export const ModalContext = createContext({
  setIsModalOpen: () => {},
  isModalOpen: false
})

export const ModalProvider =({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = {
    isModalOpen,
    setIsModalOpen,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
