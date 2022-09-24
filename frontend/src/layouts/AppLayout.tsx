import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Mostafizur | {title}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop
          smooth
          component={
            <div className="flex justify-center">
              <FiArrowUp className="hover:text-primary-500" />
            </div>
          }
        />
        <Menu />
        <div className="mt-16 text-gray-700">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
