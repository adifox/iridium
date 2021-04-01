import styles from './logo.module.css'

export default function Logo({ className }) {
  return (
    <img
      className={className || styles.default}
      src='/images/white-logo.png'
      alt='iridium blog logo'
    />
  )
}
