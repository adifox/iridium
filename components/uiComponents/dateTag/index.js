// Styles
import styles from './dateTag.module.css'

export default function DateTag({ date }) {
  return (
    <div className={styles.dateTagWrapper}>
      <p>{` - ${date}`}</p>
    </div>
  )
}
