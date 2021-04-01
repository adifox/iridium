import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import Hero from '../components/hero'
// import Card from '../components/card'
import Card from '../components/uiComponents/card'

export default function Home() {
  const arr = [1, 2, 3, 4]

  const content = arr.map((el, i) => (
    <Card
      key={el + i}
      background={'url(/images/react-pic.png)'}
      title={'Porque no usar Index como key en React'}
      description={
        'A estas alturas si has trabajado con React o simplemente has hecho la mítica “To Do List”, sabrás que para pintar una lista de elementos en react, cada elemento de un Array necesita una propiedad llamada key={}.'
      }
    />
  ))

  return (
    <div className={styles.container}>
      <Head>
        <title>Iridium Blog - Home</title>
      </Head>
      <Hero />
      <main className={styles.main}>
        <div className={styles.grid}>{content}</div>
      </main>
    </div>
  )
}
