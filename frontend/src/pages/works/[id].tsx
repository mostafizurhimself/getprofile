import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import { Work } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
};

type Props = {
  work: Work & {
    description: string;
    images: string[];
    publishedAt: string;
    previewUrl: string;
  };
};

const WorkDetail: React.FunctionComponent<Props> = ({ work }) => {
  return (
    <AppLayout title="Work Detail">
      <div className="container">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{work.title}</h1>
          <p className="mt-4 flex items-center text-gray-400">
            <span>{work.publishedAt}</span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{work.category}</span>
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {work.images.map((image, index) => (
              <div className="overflow-hidden rounded-xl" key={index}>
                <Image src={image} height={720} width={1280} layout="responsive" alt={work.title} />
              </div>
            ))}
          </Slider>
          <div className="mt-6 flex justify-center">
            <Link href={work.previewUrl}>
              <a className="btn">Live Preview</a>
            </Link>
          </div>
        </div>

        <div className="my-10">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p className="mt-4">{work.description}</p>
          <h3 className="mt-10 text-xl font-semibold">Feature List</h3>
          <ul className="mt-4 list-disc pl-4">
            <li>100% Fluid Responsive – Fits any device perfectly</li>
            <li>Tested on real devices</li>
            <li>Flexible Layout</li>
            <li>
              Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
              backend.
            </li>
            <li>Unlimited Sidebars</li>
            <li>Retina Optimized</li>
            <li>Advanced Admin Panel</li>
            <li>Demo Import, Content and Sliders</li>
            <li>Social Links</li>
            <li>Bottom Footer Widgets</li>
            <li>Clean &amp; Commented Code</li>
            <li>Advanced Typography</li>
            <li>Google Fonts – 600+ Font families available</li>
            <li>Custom Font Support</li>
            <li>Custom Page Templates</li>
            <li>Pixel Perfect Design</li>
            <li>Quick &amp; Easy Installation &amp; Setup</li>
            <li>Custom CSS Ready</li>
            <li>HTML5 &amp; CSS3</li>
            <li>Easy Customization With Variable Content Sections</li>
            <li>Custom Build Theme &amp; Page Options</li>
            <li>SEO Ready</li>
          </ul>
        </div>

        <div className="my-10 rounded-lg bg-gray-100 py-3 dark:bg-gray-700">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Start Date</td>
                <td>16 December 2020</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">End Date</td>
                <td>01 July 2022</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Current Version</td>
                <td>3.0.0</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Languages</td>
                <td>Javascript & PHP</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Frameworks</td>
                <td>Laravel, Laravel Nova, Vue.js, Tailwind CSS</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Open Source</td>
                <td>No</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">License</td>
                <td>Commercial</td>
              </tr>
              <tr>
                <td className="w-48 px-4 py-2 font-semibold">Status</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-10 flex h-48 flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold">Want to Build a project like this?</h2>
          <p className="mt-4">I can design and develop beautiful websites, apps for you</p>
          <Link href="/contact">
            <a className="mt-5 rounded-full bg-primary-500 px-8 py-2 font-semibold tracking-wide text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
              Start a project
            </a>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const work = works.find((work) => work.id === Number(id));
  if (work) {
    return {
      props: {
        work: {
          id: id,
          title: work.title,
          category: work.category,
          description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
              Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
              eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
              semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
              Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
          publishedAt: '01 July 2022',
          images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
          previewUrl: 'https://pofology.bdlancers.com/',
        },
      },
    };
  }
  return {
    notFound: true,
  };
};
export default WorkDetail;
