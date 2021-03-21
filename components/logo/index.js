import styles from './logo.module.css'

export default function Logo({ className }) {
  return (
    <img
      className={className || styles.default}
      src='/images/iridium-blog-logo.png'
      alt='iridium blog logo'
    />
  )
}
