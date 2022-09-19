import Image from "next/image";
import React from "react";
import styles from "@/styles/modules/Post.module.scss";
import Link from "next/link";

type Props = {
  imageUrl: string;
  title: string;
  publishedAt: string;
  href: string;
};

const Post = ({ imageUrl, title, publishedAt, href }: Props) => {
  return (
    <div className={styles["post"]}>
      <Link href={href}>
        <a className={styles["post-image"]}>
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <div className="p-6">
        <Link href={href}>
          <a className="font-semibold text-xl block hover:text-primary-500 hover:underline">
            {title}
          </a>
        </Link>
        <time className="text-gray-500 inline-block mt-2">{publishedAt}</time>
      </div>
    </div>
  );
};

export default Post;
