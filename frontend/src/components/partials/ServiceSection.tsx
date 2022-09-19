import { Service } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import SectionTitle from "../shared/SectionTitle";

const services: Service[] = [
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    image: "/images/web-development.svg",
  },
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    image: "/images/ui-ux.svg",
  },
  {
    name: "Mobile Application",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    image: "/images/mobile-app.png",
  },
];

const bgClasses = [
  "bg-yellow-400",
  "bg-indigo-500 text-indigo-100",
  "bg-pink-400 text-pink-900",
  "bg-purple-500 text-purple-100",
  "bg-green-500 text-green-100",
  "bg-blue-500 text-blue-100",
  "bg-red-500 text-red-100",
  "bg-slate-500 text-slate-100",
  "bg-teal-500 text-teal-100",
];

const getBackgroundClass = (index: number) => {
  return bgClasses[index % bgClasses.length];
};

const ServiceSection = () => {
  return (
    <div className="container py-16">
      <SectionTitle>Services</SectionTitle>
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames(
              "bg-yellow-400 py-8 px-4 md:px-8 text-center rounded-2xl shadow-md",
              getBackgroundClass(index)
            )}
          >
            <Image src={service.image} height={80} width={80} />
            <h4 className="text-xl font-semibold mt-4">{service.name}</h4>
            <p className="mt-4">{service.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-8">
        Looking for a custom service?{" "}
        <a href="/contact">Click here to contact me! &#128079;</a>
      </p>
    </div>
  );
};

export default ServiceSection;
