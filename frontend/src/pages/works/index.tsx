import PageTitle from "@/components/shared/PageTitle";
import AppLayout from "@/layouts/AppLayout";
import React from "react";
import Image from "next/image";
import styles from "@/styles/modules/Portfolio.module.scss";
import Link from "next/link";
import { Link as LinkIcon } from "react-feather";
import Button from "@/components/form/Button";

const work = () => {
  return (
    <AppLayout title="Works">
      <PageTitle
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Works", path: "" },
        ]}
      >
        Works
      </PageTitle>

      <div className="container py-10">
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div className={styles["portfolio"]}>
            <Image src="/images/food-delivery.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Food Delivery System & Ecommerce
              </h3>
              <Link href="works/1">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/ecommerce.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Digital Ecommerce System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/garments.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Garments Management System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/pos.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Point of Sale (POS) System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/marketplace.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Freelance Marketplace Website
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/software.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                SAAS Based Inventory Management System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/food-delivery.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Food Delivery System & Ecommerce
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/ecommerce.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Digital Ecommerce System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/garments.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Garments Management System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/pos.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Point of Sale (POS) System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/marketplace.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                Freelance Marketplace Website
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles["portfolio"]}>
            <Image src="/images/software.png" height={260} width={260} />
            <div className={styles["portfolio-overlay"]}>
              <span className={styles["portfolio-category"]}>
                Web Development
              </span>
              <h3 className={styles["portfolio-title"]}>
                SAAS Based Inventory Management System
              </h3>
              <Link href="/">
                <a className={styles["portfolio-link"]}>
                  <LinkIcon className="h-5 text-white" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button className="px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5">
            Load More
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default work;
