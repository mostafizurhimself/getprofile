import AppLayout from "@/layouts/AppLayout";
import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Button from "@/components/form/Button";
import Link from "next/link";

const settings: Settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
};

const WorkDetail = () => {
  return (
    <AppLayout title="Work Detail">
      <div className="container">
        <div className="h-60 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Garments Management System
          </h1>
          <p className="flex items-center mt-4 text-gray-400">
            <span>March 13, 2021</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mx-2"></span>
            <span>Web Development</span>
          </p>
        </div>
        <div>
          <Slider {...settings}>
            <div className="text-center">
              <Image
                src="/images/work-1.png"
                height={600}
                width={1280}
                objectFit="contain"
              />
            </div>
            <div className="text-center">
              <Image
                src="/images/work-2.png"
                height={600}
                width={1280}
                objectFit="contain"
              />
            </div>
            <div className="text-center">
              <Image
                src="/images/work-3.png"
                height={600}
                width={1280}
                objectFit="contain"
              />
            </div>
          </Slider>
          <div className="flex justify-center">
            <Button className="px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5">
              Live Preview
            </Button>
          </div>
        </div>

        <div className="my-10">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p className="mt-4">
            Cras id dui. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent
            turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam
            dictum felis eu pede mollis pretium. Curabitur vestibulum aliquam
            leo. Sed libero. Praesent metus tellus, elementum eu, semper a,
            adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus
            consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer
            hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus
          </p>
          <h3 className="text-xl font-semibold mt-10">Feature List</h3>
          <ul className="mt-4 list-disc pl-4">
            <li>100% Fluid Responsive – Fits any device perfectly</li>
            <li>Tested on real devices</li>
            <li>Flexible Layout</li>
            <li>
              Use our demo layout or create your own visually different
              experience using page Vcamp and feature-rich backend.
            </li>
            <li>Unlimited Sidebars</li>
            <li>Retina Optimized</li>
            <li>Advanced Admin Panel</li>
            <li>Demo Import, Content and Sliders</li>
            <li>Social Links</li>
            <li>Bottom Footer Widgets</li>
            <li>Clean &amp; Commented Code</li>
            <li>Advanced Typography</li>
            <li>Google Fonts – 600+ Font families available</li>
            <li>Custom Font Support</li>
            <li>Custom Page Templates</li>
            <li>Pixel Perfect Design</li>
            <li>Quick &amp; Easy Installation &amp; Setup</li>
            <li>Custom CSS Ready</li>
            <li>HTML5 &amp; CSS3</li>
            <li>Easy Customization With Variable Content Sections</li>
            <li>Custom Build Theme &amp; Page Options</li>
            <li>SEO Ready</li>
          </ul>
        </div>

        <div className="my-10 bg-gray-100 rounded-lg py-3">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Client</td>
                <td>Easy Fashion Ltd.</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Start Date</td>
                <td>16 December 2018</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">End Date</td>
                <td>16 December 2020</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">
                  Current Version
                </td>
                <td>3.0.0</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Languages</td>
                <td>Javascript & PHP</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Frameworks</td>
                <td>Laravel, Laravel Nova, Vue.js, Tailwind CSS</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Open Source</td>
                <td>No</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Status</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-48 flex flex-col justify-center items-center mb-10">
          <h2 className="text-4xl font-semibold">
            Want to Build a project like this?
          </h2>
          <p className="mt-4">
            I can design and develop beautiful websites, apps for you
          </p>
          <Link href="/contact">
            <a className="px-8 py-2 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold rounded-full tracking-wide mt-5">
              Start a project
            </a>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default WorkDetail;
