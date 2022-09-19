import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Dribbble, Facebook, GitHub, Instagram, Twitter } from "react-feather";
import Button from "../form/Button";
import HeroBackground from "./HeroBackground";

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <div className="hero relative flex items-center justify-center -mt-16">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden">
          <Image src="/images/man.png" width={140} height={140} />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Mostafizur Rahman</h1>
        <p className="mt-2">I'm a Fullstack Developer</p>
        <div className="flex  mt-4">
          <Link href="https://www.instragram.com">
            <a>
              <Instagram className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.twitter.com">
            <a>
              <Twitter className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.facebook.com">
            <a>
              <Facebook className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.dribble.com">
            <a>
              <Dribbble className="mx-3" />
            </a>
          </Link>
          <Link href="https://www.github.com">
            <a>
              <GitHub className="mx-3" />
            </a>
          </Link>
        </div>
        <Button className="px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5">
          Hire Me
        </Button>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="text-sm mb-3">Scroll Down</p>
        <div className="relative flex justify-center h-7 w-5 rounded-full border-2 border-gray-600">
          <div
            className="w-1 h-1 bg-gray-600 absolute animate-scroll"
            style={{ top: "6px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
