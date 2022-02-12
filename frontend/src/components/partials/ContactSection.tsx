import Image from "next/image";
import React from "react";
import SectionTitle from "../shared/SectionTitle";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div className="container py-16">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="col-span-2">
          <div className="grid md:grid-cols-2 gap-8">
            <input
              className="w-full px-6 py-4 rounded-full outline-none focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-lg"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full px-6 py-4 rounded-full outline-none focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-lg"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="mt-8">
            <input
              className="w-full px-6 py-4 rounded-full outline-none focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-lg"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mt-8">
            <textarea
              className="w-full px-6 py-4 rounded-3xl outline-none focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-lg"
              placeholder="Message"
              rows={5}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
