// Styles
import styles from '../../styles/Home.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <p>&copy; Szabolcs Lukacs</p>
    </div>
    <div className={styles.socialFooter}>
      <a href='#' className='fa fa-linkedin'></a>
      <a href='#' className='fa fa-twitter'></a>
      <a href='#' className='fa fa-instagram'></a>
    </div>

    {/* <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Created by a Lucky guy with the power of{ ' ' }
      <img src="/vercel.svg" alt="Vercel Logo" className={ styles.logo } />
    </a> */}
  </footer>
)

export default Footer
