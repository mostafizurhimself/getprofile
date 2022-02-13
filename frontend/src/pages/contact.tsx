import PageTitle from "@/components/shared/PageTitle";
import AppLayout from "@/layouts/AppLayout";
import React from "react";
import Image from "next/image";
import Button from "@/components/form/Button";

type Props = {};

const Contact = (props: Props) => {
  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "" },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-48 mb-10">
            <Image src="/images/map.svg" layout="fill" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="text-gray-400 mt-10">
              <p>3rd Floor, Abu Sayeed Market, Rampura</p>
              <p>Dhaka, Bangladesh</p>

              <p className="mt-4">+8801834507645</p>
              <p>mostafizurhimself@gmail.com</p>
            </div>
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
            <div className="mt-8">
              <Button className="px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
