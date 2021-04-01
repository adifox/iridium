// Styles
import styles from './tag.module.css'

export default function Tag({ tagTitle }) {
  return (
    <a href='#'>
      <div className={styles.tagContainer}>
        <p>{tagTitle}</p>
      </div>
    </a>
  )
}
