import Image from 'next/image';
import React from 'react';
import { Dribbble, Facebook, GitHub, Instagram, Twitter } from 'react-feather'
import Button from '../form/Button';
import HeroBackground from './HeroBackground';

interface Props {

};

const HeroSection = (props: Props) => {
    return (
        <div className='h-screen relative flex items-center justify-center'>
            <HeroBackground />
            <div className='flex flex-col items-center'>
                <div className='rounded-full overflow-hidden'>
                    <Image src="/images/man.png" width={140} height={140} />
                </div>
                <h1 className='mt-4 text-3xl font-bold '>Mostafizur Rahman</h1>
                <p className='mt-2'>I'm a Fullstack Developer</p>
                <div className='flex  mt-4'>
                    <Instagram className='mx-3' />
                    <Twitter className='mx-3' />
                    <Facebook className='mx-3' />
                    <Dribbble className='mx-3' />
                    <GitHub className='mx-3' />
                </div>
                <Button className='px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5'>
                    Hire Me
                </Button>
            </div>

            <div className='absolute bottom-0 flex flex-col items-center '>
                <p className='text-sm mb-3'>Scroll Down</p>
                <div className='relative flex justify-center h-7 w-5 rounded-full border-2 border-gray-600'>
                    <div className='w-1 h-1 bg-gray-600 absolute animate-scroll' style={{ top: "6px" }}></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
