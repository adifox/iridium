import Link from 'next/link'

// Styles
import styles from './hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitles}>
          <h1 className={styles.title}>Welcome to the Iridium Blog</h1>
          <h2>
            Sharing with you my experience about software development. And maybe
            a GIF or two.
          </h2>
          {/* <p className={styles.description}>
          Trying to make you understand the world of{' '}
          <code className={styles.code}>coding</code>
        </p>
        <Link href='/articles/[articles.js]' as='/articles/art1'>
          Link to Article
        </Link> */}
        </div>
        <div className={styles.heroImageContainer}>
          <img
            className={styles.heroPic}
            src='/images/coding.png'
            alt='code with iridium-blog'
          />
        </div>
      </div>
    </div>
  )
}
