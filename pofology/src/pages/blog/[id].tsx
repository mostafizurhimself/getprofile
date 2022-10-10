import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiFacebook, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import CommentBox from '@/components/partials/CommentBox';
import RecentComment from '@/components/partials/RecentComment';
import { Post } from '@/types';
import { GetServerSideProps } from 'next';
import { posts } from '@/data/posts';

type Props = {
  post: Post;
};

const BlogSingle: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <AppLayout title="Blog">
      <div className="container mb-10">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{post.title}</h1>
          <p className="mt-4 flex items-center text-gray-400">
            <span>{post.publishedAt}</span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{post.authorName}</span>
          </p>
        </div>
        <div>
          <div className="mt-10 overflow-hidden rounded-xl">
            <Image src={post.imageUrl} height={720} width={1280} layout="responsive" alt={post.title} />
          </div>
          <article className="prose mt-10 max-w-full prose-blockquote:my-8  prose-blockquote:border-l-4  prose-blockquote:border-primary-500  prose-blockquote:pl-6  prose-blockquote:text-xl  prose-blockquote:font-semibold prose-blockquote:not-italic dark:prose-invert">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>
          </article>
          <div className="mt-10  flex">
            <Link href="#">
              <a>
                <FiTwitter className="mr-3" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FiFacebook className="mx-3" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FiLinkedin className="mx-3" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FiMail className="mx-3" />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="mt-10">
              <RecentComment />
            </div>
            <div className="mt-10">
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const post = posts.find((post) => post.id === Number(id));
  if (post) {
    return {
      props: {
        post: {
          id: id,
          title: post.title,
          imageUrl: post.imageUrl,
          publishedAt: post.publishedAt,
          authorName: 'John Doe',
        },
      },
    };
  }

  return {
    notFound: true,
  };
};

export default BlogSingle;
