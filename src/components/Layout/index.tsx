import { FC } from 'react';

import Head from 'next/head'
import { Menu } from "../Menu";
import { Main } from './styles';

export const Layout: FC = ({ children }) => {
 
  return(
    <>
      <Head>
        <title>Star Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Menu />
      
      <Main>
        {children}
      </Main>
    </>
  )
}
