import Styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../icons/logo.component';
import IconFaceBook from '@/public/images/shared/desktop/icon-facebook.svg';
import IconInstagram from '@/public/images/shared/desktop/icon-instagram.svg';
import IconTwitter from '@/public/images/shared/desktop/icon-twitter.svg';

export default function Footer() {
  return (
    <footer className={`container ${Styles.footer}`}>
        <Link href='/'><Logo fill="#ffff"/></Link>
      <div className={Styles.navLinks}>
        <Link className={Styles.navLink} href="/">home</Link>
        <Link className={Styles.navLink} href="/about">about us</Link>
        <Link className={Styles.navLink} href="/plan">create your own plan</Link>
      </div>

      <div className={Styles.socialLinks}>
        <Link className={Styles.socialLink} href="https://www.facebook.com" target='_blank'><Image src={IconFaceBook} alt="icon-facebook" /></Link>
        <Link className={Styles.socialLink} href="https://www.instagram.com/remcoj89" target='_blank'><Image src={IconInstagram} alt="icon-instagram" /></Link>
        <Link className={Styles.socialLink} href="https://www.twitter.com" target='_blank'><Image src={IconTwitter} alt="icon-twitter" /></Link>
      </div>
    </footer>
  )
}
