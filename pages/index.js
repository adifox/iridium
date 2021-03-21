import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import Hero from '../components/hero'
import Card from '../components/card'

export default function Home() {
  const arr = [1, 2, 3, 4]

  const content = arr.map((el) => (
    <Card
      key={el}
      href={'https://nextjs.org/learn'}
      title={'Learn'}
      text={'Learn about Next.js in an interactive course with quizzes!'}
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
