import Button from '@/components/form/Button';
import PageTitle from '@/components/shared/PageTitle';
import Portfolio from '@/components/shared/Portfolio';
import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';

const work = () => {
  return (
    <AppLayout title="Works">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Works', path: '' },
        ]}
      >
        Works
      </PageTitle>

      <div className="container py-10">
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
          {works.map((work) => (
            <Portfolio
              key={work.id}
              imageUrl={work.thumbnailUrl}
              category={work.category}
              title={work.title}
              href={`/works/${work.id}`}
            />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
            Load More
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default work;
