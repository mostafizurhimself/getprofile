import Image from "next/image";
import React from "react";
import styles from "@/styles/modules/Portfolio.module.scss";
import Link from "next/link";
import { Link as LinkIcon } from "react-feather";
import Button from "../form/Button";
import SectionTitle from "../shared/SectionTitle";
import Portfolio from "../shared/Portfolio";

type Props = {};

const RecentWorkSection = (props: Props) => {
  return (
    <div className="container py-16">
      <SectionTitle>Recent Works</SectionTitle>
      <div className="mt-10 grid xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <Portfolio
          imageUrl="/images/food-delivery.png"
          category="Web Development"
          title="Food Delivery System & Ecommerce"
          href="/works/1"
        />
        <Portfolio
          imageUrl="/images/ecommerce.png"
          category="Web Development"
          title="Digital Ecommerce System"
          href="/works/1"
        />
        <Portfolio
          imageUrl="/images/garments.png"
          category="Web Development"
          title="Garments Management System"
          href="/works/1"
        />
        <Portfolio
          imageUrl="/images/pos.png"
          category="Web Development"
          title="Point of Sale (POS) System"
          href="/works/1"
        />
        <Portfolio
          imageUrl="/images/marketplace.png"
          category="Web Development"
          title="Freelance Marketplace Website"
          href="/works/1"
        />

        <Portfolio
          imageUrl="/images/software.png"
          category="Web Development"
          title="SAAS Based Inventory Management System"
          href="/works/1"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <Button className="px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5">
          View All
        </Button>
      </div>
    </div>
  );
};

export default RecentWorkSection;
