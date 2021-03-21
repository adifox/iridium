import { useState } from 'react'
import Link from 'next/link'

// Components
import Logo from '../logo'
import Modal from '../uiComponents/modal'

import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const modalStyle = !isMenuOpen ? styles.closeHeaderModal : styles.headerModal
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <nav className={styles.navSection}>
          <ul className={styles.ulStyle}>
            <li className={styles.articles}>
              <Link href='/article'>Articles</Link>
            </li>
            <li className={styles.about}>
              <Link href='/aboutme'>About me</Link>
            </li>
            {/* <li>
              <Link href='/iridium'>Why Iridium?</Link>
            </li> */}
          </ul>
        </nav>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <i className='fa fa-bars'></i>
        </button>
      </div>
      <Modal
        className={modalStyle}
        onClickHandler={() => setMenuOpen(!isMenuOpen)}
      >
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href='/article'>Articles</Link>
            </li>
            <li>
              <Link href='/aboutme'>About me</Link>
            </li>
            <li>
              <Link href='/iridium'>Why Iridium?</Link>
            </li>
          </ul>
        </div>
      </Modal>
    </header>
  )
}
