import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import Typical from 'react-typical';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/man.png" width={140} height={140} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Mostafizur Rahman</h1>
        <div className="mt-2 flex gap-1">
          I'm a{' '}
          <Typical
            steps={['Fullstack Developer', 1500, 'UI/UX Designer', 1500, 'Mobile App Developer', 2000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <div className="mt-4  flex">
          <Link href="https://www.instragram.com">
            <a>
              <FiInstagram className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.twitter.com">
            <a>
              <FiTwitter className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.facebook.com">
            <a>
              <FiFacebook className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.dribble.com">
            <a>
              <FiDribbble className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.github.com">
            <a>
              <FiGithub className="mx-3" />
            </a>
          </Link>
        </div>
        <Button className="mt-5 px-8">Hire Me</Button>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
