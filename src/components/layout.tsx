import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title = '', description = '' }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`Code Bushido - ${title}`}</title>
        <meta name="description" content={description} />
        desc
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
