import GlobalStyles from '../styles/global'
import { Layout } from '../components/Layout';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
