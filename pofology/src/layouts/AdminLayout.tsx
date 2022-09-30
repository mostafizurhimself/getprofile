import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  const pageTitle = title ? `${title} | GetProfile` : 'GetProfile';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="flex min-h-screen flex-col">{children}</div>
    </>
  );
};

export default AppLayout;
