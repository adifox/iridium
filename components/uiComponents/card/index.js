import styles from './card.module.css'

// Components
import Image from '../image'
import Tag from '../tag'
import DateTag from '../dateTag'

export default function Card({ background, title, subtitle, description }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={'/images/react-pic.png'}
          alt={'react-image'}
          styles={styles.image}
        />
      </div>
      <div className={styles.textContent}>
        <div className={styles.cardMeta}>
          <Tag tagTitle={'React'} />
          <Tag tagTitle={'JavaScript'} />
          <DateTag date={'2 Marzo, 2021'} />
        </div>
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        {description && (
          <div className={styles.textWrapper}>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  )
}
