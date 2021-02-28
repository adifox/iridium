// Styles
import styles from '../../styles/Home.module.css'

const Card = ({ href, title, text }) => (
  <a href={ href } className={ styles.card }>
    <h3>{ title } &rarr;</h3>
    <p>{ text }</p>
  </a>
)

export default Card