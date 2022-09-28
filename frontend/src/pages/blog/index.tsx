import PageTitle from '@/components/shared/PageTitle';
import Pagination from '@/components/shared/Pagination';
import Post from '@/components/shared/Post';
import { posts } from '@/data/posts';
import AppLayout from '@/layouts/AppLayout';

const Blog = () => {
  return (
    <AppLayout title="Blog">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '' },
        ]}
      >
        Blog
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Post
              key={post.id}
              href={`/blog/${post.id}`}
              thumbnailUrl={post.thumbnailUrl}
              title={post.title}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
        <div className="mt-12">
          <Pagination />
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;
