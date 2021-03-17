import styles from './logo.module.css'

export default function Logo({ className }) {
  return (
    <img
      className={className || styles.default}
      src='/images/logo-iridium-blog.png'
      alt='iridium blog logo'
    />
  )
}
