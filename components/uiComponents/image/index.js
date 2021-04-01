export default function Image({ src, alt, styles }) {
  return <img className={styles} src={src} alt={alt} />
}
