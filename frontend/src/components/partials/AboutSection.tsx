import Image from "next/image";
import React from 'react';
import Button from "@/components/form/Button";
import DotBg from './DotBg';

interface Props { };

const AboutSection = (props: Props) => {
    return (
        <div className='py-6'>
            <div className='relative'>
                <DotBg className='h-8 w-8 absolute bottom-5' />
                <h3 className='text-3xl font-bold pl-3'>About Me</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 py-6'>
                <div className='overflow-hidden text-center md:text-left'>
                    <Image src="/images/man.png" className="rounded-full" width={140} height={140} />
                </div>
                <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-lg">
                    <div>
                        <p className="text-justify">
                            I am Bolby Doe, web developer from London,
                            United Kingdom. I have rich experience in web site design and building and customization,
                            also I am good at WordPress.
                        </p>
                        <Button className='px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold tracking-wider mt-5'>
                            Download CV
                        </Button>
                    </div>
                    <div>
                        <div className="mb-4">
                            <div className="mb-3 flex justify-between">
                                <h6 className="font-semibold">PHP & Laravel</h6>
                                <p>90%</p>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
                                <div className="bg-blue-600 h-2" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="mb-3 flex justify-between">
                                <h6 className="font-semibold">Javascript & Node JS</h6>
                                <p>85%</p>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
                                <div className="bg-green-400 h-2" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="mb-3 flex justify-between">
                                <h6 className="font-semibold">Vue.js & React.js</h6>
                                <p>85%</p>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
                                <div className="bg-primary-400 h-2" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
