import React from "react";
import Head from "next/head";
import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUp } from "react-feather";

interface Props {
  title?: string;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  -6;
  return (
    <>
      <Head>
        <title>Mostafizur | {title}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop
          smooth
          component={
            <div className="flex justify-center">
              <ArrowUp className="hover:text-primary-500" />
            </div>
          }
        />
        <Menu />
        <div className="text-gray-700 mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
