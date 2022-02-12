import Image from "next/image";
import React from "react";
import SectionTitle from "../shared/SectionTitle";

type Props = {};

const ServiceSection = (props: Props) => {
  return (
    <div className="container py-16">
      <SectionTitle>Services</SectionTitle>
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-yellow-400 py-8 px-4 md:px-8 text-center rounded-2xl shadow-md">
          <Image src="/images/web-development.svg" height={80} width={80} />
          <h4 className="text-xl font-semibold mt-4">Web Development</h4>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget.
          </p>
        </div>
        {/* Service 2 */}
        <div className="bg-indigo-500 py-8 px-4 md:px-8 text-center rounded-2xl shadow-md">
          <Image src="/images/ui-ux.svg" height={80} width={80} />
          <h4 className="text-white text-xl font-semibold mt-4">
            UI/UX Design
          </h4>
          <p className="mt-4 text-white">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget.
          </p>
        </div>
        {/* Service 3 */}
        <div className="bg-pink-400 py-8 px-4 md:px-8 text-center rounded-2xl shadow-md">
          <Image src="/images/mobile-app.png" height={80} width={80} />
          <h4 className="text-white text-xl font-semibold mt-4">
            Mobile Application
          </h4>
          <p className="mt-4 text-white">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget.
          </p>
        </div>
      </div>
      <p className="text-center mt-8">
        Looking for a custom service?{" "}
        <a href="/contact">Click here to contact me! &#128079;</a>
      </p>
    </div>
  );
};

export default ServiceSection;
