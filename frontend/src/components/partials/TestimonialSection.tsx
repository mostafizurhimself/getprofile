import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import SectionTitle from "../shared/SectionTitle";

type Props = {};

const reviewSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
};

const clientSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const Testimonial = (props: Props) => {
  return (
    <div className="container py-16">
      <SectionTitle>Clients & Reviews</SectionTitle>
      <div className="mt-16">
        <Slider {...reviewSettings}>
          <div className="mb-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full">
                <Image src="/images/client-1.png" height={100} width={100} />
              </div>
              <h6 className="font-semibold mt-3 text-lg">John Doe</h6>
              <p className="text-gray-400 text-sm">
                General Manager at Easy Fashion Ltd.
              </p>
              <div className="bg-white shadow-lg rounded-2xl max-w-2xl p-8 mt-6 text-gray-500">
                I enjoy working with the theme and learn so much. You guys make
                the process fun and interesting. Good luck! 🔥
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full">
                <Image src="/images/client-2.png" height={100} width={100} />
              </div>
              <h6 className="font-semibold mt-3 text-lg">Naveed Ali</h6>
              <p className="text-gray-400 text-sm">
                Project Manager at Sozashop
              </p>
              <div className="bg-white shadow-lg rounded-2xl max-w-2xl p-8 mt-6 text-gray-500">
                I enjoy working with the theme and learn so much. You guys make
                the process fun and interesting. Good luck! 🔥
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full">
                <Image src="/images/client-3.png" height={100} width={100} />
              </div>
              <h6 className="font-semibold mt-3 text-lg">Rizwan Mirza</h6>
              <p className="text-gray-400 text-sm">Owner at Outchimp.inc</p>
              <div className="bg-white shadow-lg rounded-2xl max-w-2xl p-8 mt-6 text-gray-500">
                I enjoy working with the theme and learn so much. You guys make
                the process fun and interesting. Good luck! 🔥
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="mt-16">
        <Slider {...clientSettings}>
          <div className="text-center">
            <Image
              src="/images/client-logo-1.png"
              height={70}
              width={250}
              objectFit="contain"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/client-logo-2.png"
              height={70}
              width={250}
              objectFit="contain"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/client-logo-3.png"
              height={70}
              width={250}
              objectFit="contain"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/client-logo-4.png"
              height={70}
              width={250}
              objectFit="contain"
            />
          </div>
          <div className="text-center">
            <Image
              src="/images/client-logo-5.png"
              height={70}
              width={250}
              objectFit="contain"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
