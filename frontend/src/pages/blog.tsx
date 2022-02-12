import PageTitle from "@/components/shared/PageTitle";
import AppLayout from "@/layouts/AppLayout";
import React from "react";
import Image from "next/image";
import styles from "@/styles/modules/Post.module.scss";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination";

type Props = {};

const Blog = (props: Props) => {
  return (
    <AppLayout title="Blog">
      <PageTitle
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "" },
        ]}
      >
        Blog
      </PageTitle>
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
          {/* Post 1 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-1.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  5 Best App Development Tool for Your Project
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                09 February, 2020
              </time>
            </div>
          </div>
          {/* Post 2 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-2.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  Common Misconceptions About Payment
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                07 February, 2020
              </time>
            </div>
          </div>
          {/* Post 3 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-3.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  3 Things To Know About Startup Business
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                05 February, 2020
              </time>
            </div>
          </div>
          {/* Post 1 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-1.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  5 Best App Development Tool for Your Project
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                09 February, 2020
              </time>
            </div>
          </div>
          {/* Post 2 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-2.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  Common Misconceptions About Payment
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                07 February, 2020
              </time>
            </div>
          </div>
          {/* Post 3 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-3.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  3 Things To Know About Startup Business
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                05 February, 2020
              </time>
            </div>
          </div>
          {/* Post 1 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-1.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  5 Best App Development Tool for Your Project
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                09 February, 2020
              </time>
            </div>
          </div>
          {/* Post 2 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-2.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  Common Misconceptions About Payment
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                07 February, 2020
              </time>
            </div>
          </div>
          {/* Post 3 */}
          <div className={styles["post"]}>
            <Link href="/">
              <a className={styles["post-image"]}>
                <Image
                  src="/images/blog-3.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="p-6">
              <Link href="/">
                <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
                  3 Things To Know About Startup Business
                </a>
              </Link>
              <time className="text-gray-500 inline-block mt-2">
                05 February, 2020
              </time>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Pagination />
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;
