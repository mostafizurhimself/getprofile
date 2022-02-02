import React from 'react';
import Head from "next/head";
import Menu from '@/components/partials/Menu';

interface Props {
    title?: string
};

const AppLayout: React.FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>Mostafizur | {title}</title>
            </Head>
            <Menu />
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 text-gray-700">
                {children}
            </div>
        </>
    )
};

export default AppLayout;
