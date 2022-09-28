import Image from 'next/image';
import React from 'react';
import styles from '@/styles/modules/Post.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  thumbnailUrl: string;
  title: string;
  publishedAt: string;
  href: string;
};

const Post = ({ thumbnailUrl, title, publishedAt, href }: Props) => {
  return (
    <div className={classNames(styles['post'], 'bg-white dark:bg-gray-700')}>
      <Link href={href}>
        <a className={styles['post-image']}>
          <Image src={thumbnailUrl} height={384} width={512} layout="responsive" alt={title} />
        </a>
      </Link>
      <div className="p-6">
        <Link href={href}>
          <a className="block text-xl font-semibold hover:text-primary-500 hover:underline">{title}</a>
        </Link>
        <time className="mt-2 inline-block text-gray-500">{publishedAt}</time>
      </div>
    </div>
  );
};

export default Post;
