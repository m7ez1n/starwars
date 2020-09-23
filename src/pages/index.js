import Head from 'next/head'
import { Menu } from '../components/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
    </>
  )
}
