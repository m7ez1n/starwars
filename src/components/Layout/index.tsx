import { FC } from 'react';

import Head from 'next/head';
import { Menu } from '../Menu';
import { Main } from './styles';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Star Wiki</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <Menu />

      <Main>{children}</Main>
    </>
  );
};
