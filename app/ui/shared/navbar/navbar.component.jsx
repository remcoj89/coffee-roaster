'use client';

import React, {useContext} from 'react';
import { NavContext } from '@/app/_lib/providers/nav.provider';
import Logo from '../../icons/logo.component';
import Styles from './navbar.module.css';
import Link from 'next/link';
import IconBurgerMenu from '../../icons/icon-burgermenu';
import IconClose from '../../icons/icon-close';

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(NavContext);

  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
  <>
    <nav className={Styles.navbar}>
      <div className="container">
        <div className={Styles.navContainer}>
          <Link href="/"><Logo fill='#333D4B'/></ Link>
          <ul className={Styles.navlinks}>
            <li className={Styles.navlink} ><Link href="/">home</Link></li>
            <li className={Styles.navlink} ><Link href="/about">about us</Link></li>
            <li className={Styles.navlink} ><Link href="/plan">create your plan</Link></li>
          </ul>
          <div className={Styles.mobileNav} onClick={toggleNavMenu}>
            {isMenuOpen ? <IconClose />:<IconBurgerMenu />}
          </div>
        </div>
      </div>
    </nav>
    <div className={Styles.mobileNavMenu} style={{ display: isMenuOpen? 'block' : 'none' }}>
        <li className={Styles.navlink}><Link href="/">home</Link></li>
        <li className={Styles.navlink}><Link href="/about">about us</Link></li>
        <li className={Styles.navlink}><Link href="/plan">create your plan</Link></li>
    </div>
  </>
  )
}

export default Navbar
