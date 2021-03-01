import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'

export default function Home() {
  const arr = [ 1, 2, 3, 4 ]

  const content = arr.map(el => (
    <Card
      key={ el }
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main className={ styles.main }>
        <Header />
        <div className={ styles.grid }>
          { content }
        </div>
      </main>
      <Footer />
    </div>
  )
}
