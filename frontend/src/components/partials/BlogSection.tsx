import Post from '@/components/shared/Post';
import { posts } from '@/data/posts';
import SectionTitle from '@/components/shared/SectionTitle';

const BlogSection = () => {
  return (
    <>
      <SectionTitle>Latest Posts</SectionTitle>
      <div className="mt-10 grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
        {posts
          .filter((_, index) => index < 3)
          .map((post) => (
            <Post
              key={post.id}
              href={`/blog/${post.id}`}
              thumbnailUrl={post.thumbnailUrl}
              title={post.title}
              publishedAt={post.publishedAt}
            />
          ))}
      </div>
    </>
  );
};

export default BlogSection;
