import Button from '@/components/form/Button';
import PageTitle from '@/components/shared/PageTitle';
import Portfolio from '@/components/shared/Portfolio';
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
          <Portfolio
            imageUrl="/images/food-delivery.png"
            category="Web Development"
            title="Food Delivery System & Ecommerce"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/ecommerce.png"
            category="Web Development"
            title="Digital Ecommerce System"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/garments.png"
            category="Web Development"
            title="Garments Management System"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/pos.png"
            category="Web Development"
            title="Point of Sale (POS) System"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/marketplace.png"
            category="Web Development"
            title="Freelance Marketplace Website"
            href="/works/1"
          />

          <Portfolio
            imageUrl="/images/software.png"
            category="Web Development"
            title="SAAS Based Inventory Management System"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/food-delivery.png"
            category="Web Development"
            title="Food Delivery System & Ecommerce"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/ecommerce.png"
            category="Web Development"
            title="Digital Ecommerce System"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/garments.png"
            category="Web Development"
            title="Garments Management System"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/pos.png"
            category="Web Development"
            title="Point of Sale (POS) System"
            href="/works/1"
          />
          <Portfolio
            imageUrl="/images/marketplace.png"
            category="Web Development"
            title="Freelance Marketplace Website"
            href="/works/1"
          />

          <Portfolio
            imageUrl="/images/software.png"
            category="Web Development"
            title="SAAS Based Inventory Management System"
            href="/works/1"
          />
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
