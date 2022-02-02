import Link from 'next/link';
import React from 'react';

type Props = {};

const Menu = (props: Props) => {
    return (
        <header className='header text-gray-700'>
            <div className='max-w-7xl mx-auto flex items-center px-4 md:px-6 py-2'>
                <Link href="/">
                    <a className='text-3xl  font-bold'>
                        <span>Mostafizur</span>
                        <span className='text-primary-500'>.</span>
                    </a>
                </Link>
                <ul className='hidden md:flex items-center ml-auto'>
                    <li>
                        <Link href="/about">
                            <a className='inline-block font-semibold px-4  hover:text-primary-500'>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/works">
                            <a className='inline-block font-semibold px-4  hover:text-primary-500'>Works</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className='inline-block font-semibold px-4  hover:text-primary-500'>Contact</a>
                        </Link>
                    </li>
                </ul>
                <button type='button' className='flex md:hidden ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Menu;
