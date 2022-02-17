import Image from "next/image";
import React from "react";
import styles from "@/styles/modules/Post.module.scss";
import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import Post from "@/components/shared/Post";

type Props = {};

const BlogSection = (props: Props) => {
  return (
    <div className="container py-16">
      <SectionTitle>Latest Posts</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8 mt-10">
        {/* Post 1 */}
        <Post
          href="/blog/1"
          imageUrl="/images/blog-1.svg"
          title="5 Best App Development Tool for Your Project"
          publishedAt="09 February, 2020"
        />
        {/* Post 2 */}
        <Post
          href="/blog/1"
          imageUrl="/images/blog-2.svg"
          title="Common Misconceptions About Payment"
          publishedAt="07 February, 2020"
        />
        {/* Post 3 */}
        <Post
          href="/blog/1"
          imageUrl="/images/blog-3.svg"
          title="3 Things To Know About Startup Business"
          publishedAt="05 February, 2020"
        />
      </div>
    </div>
  );
};

export default BlogSection;
