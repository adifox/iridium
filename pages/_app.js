import '../styles/globals.css'

// Components
import Layout from '../components/layout'
// import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
