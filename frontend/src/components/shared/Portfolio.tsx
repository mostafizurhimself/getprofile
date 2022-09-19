import React from "react";
import Image from "next/image";
import styles from "@/styles/modules/Portfolio.module.scss";
import Link from "next/link";
import { Link as LinkIcon } from "react-feather";
import { UrlObject } from "url";

type Props = {
  imageUrl: string;
  category: string;
  title: string;
  href: string | UrlObject;
};

const Portfolio = ({ imageUrl, category, title, href }: Props) => {
  return (
    <div className={styles["portfolio"]}>
      <Image src={imageUrl} height={260} width={260} />
      <div className={styles["portfolio-overlay"]}>
        <span className={styles["portfolio-category"]}>{category}</span>
        <Link href={href}>
          <a className={styles["portfolio-title"]}>{title}</a>
        </Link>
        <Link href={href}>
          <a className={styles["portfolio-link"]}>
            <LinkIcon className="h-5 text-white" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
