// Styles
import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <>
      <h1 className={ styles.title }>
        Welcome to the Iridium Blog
        </h1>

      <p className={ styles.description }>
        Yes, another tech Blog, but with a little bit of{ ' ' }
        <code className={ styles.code }>finesse</code>
      </p>
    </>
  )
}