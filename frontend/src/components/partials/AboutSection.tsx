import Image from "next/image";
import React from "react";
import Button from "@/components/form/Button";
import SectionTitle from "../shared/SectionTitle";

interface Props {}

const AboutSection = (props: Props) => {
  return (
    <div className="container py-6">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
        <div className="overflow-hidden text-center md:text-left">
          <Image
            src="/images/man.png"
            className="rounded-full"
            width={140}
            height={140}
          />
        </div>
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white px-6 pt-8 pb-6 rounded-2xl shadow-lg">
          <div>
            <p className="text-justify">
              Hi, I am Md Mostafizur Rahman, I am a fullstack developer. I work
              from Dhaka, Bangladesh. I have rich experience in building,
              designing & customizing website, web apps, mobile apps etc.
            </p>
            <Button className="px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5">
              Download CV
            </Button>
          </div>
          <div>
            <div className="mb-4">
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Backend</h6>
                <p>85%</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
                <div className="bg-blue-500 h-2" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Frontend</h6>
                <p>90%</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
                <div
                  className="bg-green-400 h-2"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">UI/UX Design</h6>
                <p>70%</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
                <div
                  className="bg-yellow-400 h-2"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
