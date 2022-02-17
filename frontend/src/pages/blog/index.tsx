import PageTitle from "@/components/shared/PageTitle";
import AppLayout from "@/layouts/AppLayout";
import React from "react";
import Image from "next/image";
import styles from "@/styles/modules/Post.module.scss";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination";
import Post from "@/components/shared/Post";

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
        <div className="mt-12">
          <Pagination />
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;
