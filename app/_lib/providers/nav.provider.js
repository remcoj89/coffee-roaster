'use client';

import React, {createContext, useState} from 'react';

export const NavContext = createContext({
  setIsMenuOpen: () => {},
  isMenuOpen: false
})

export const NavProvider =({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormFieldOpen, setIsFormFieldOpen] = useState(false);

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    isFormFieldOpen,
    setIsFormFieldOpen,
  }

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}
