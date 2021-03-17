import Link from 'next/link'

import Logo from '../logo'

import styles from './header.module.css'

export default function Header() {
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
        <nav>
          <div className={styles.navSection}>
            <ul className={styles.ulStyle}>
              <li>
                <Link href='/article'>Articles</Link>
              </li>
              <li>
                <button className={styles.menuButton}>
                  <i className='fa fa-bars'></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
