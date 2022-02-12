import Image from "next/image";
import React from "react";
import styles from "@/styles/modules/Post.module.scss";
import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";

type Props = {};

const BlogSection = (props: Props) => {
  return (
    <div className="container py-16">
      <SectionTitle>Latest Posts</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8 mt-10">
        {/* Post 1 */}
        <div className={styles["post"]}>
          <Link href="/">
            <a className={styles["post-image"]}>
              <Image src="/images/blog-1.svg" layout="fill" objectFit="cover" />
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
              <Image src="/images/blog-2.svg" layout="fill" objectFit="cover" />
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
              <Image src="/images/blog-3.svg" layout="fill" objectFit="cover" />
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
    </div>
  );
};

export default BlogSection;
