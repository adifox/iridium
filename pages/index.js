import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import Header from '../components/header'
import Card from '../components/card'

export default function Home() {
  const arr = [ 1, 2, 3, 4 ]

  const content = arr.map(el => (
    <Card
      href={ "https://nextjs.org/learn" }
      title={ 'Learn' }
      text={ 'Learn about Next.js in an interactive course with quizzes!' }
    />
  ))

  return (
    <div className={ styles.container }>
      <Head>
        <title>Iridium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ styles.main }>
        <Header />
        <div className={ styles.grid }>
          { content }
        </div>
      </main>

      <footer className={ styles.footer }>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by a Lucky guy with the power of{ ' ' }
          <img src="/vercel.svg" alt="Vercel Logo" className={ styles.logo } />
        </a>
      </footer>
    </div>
  )
}
