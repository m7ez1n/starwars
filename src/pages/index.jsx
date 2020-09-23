import { useState } from 'react';
import Head from 'next/head'
import { Menu } from '../components/Menu';

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  return (
    <>
      <Head>
        <title>Star Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={!isLight ? "dark" : "light"}>
        <Menu isLight={isLight} setIsLight={setIsLight} />
      </body>
    </>
  )
}
