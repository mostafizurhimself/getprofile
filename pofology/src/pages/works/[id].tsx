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
            {work.featureList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="my-10 rounded-lg bg-gray-50 py-3 shadow-md dark:bg-gray-700">
          <table className="w-full">
            <tbody>
              {work.attributes.map((attribute, index) => (
                <tr key={index}>
                  <td className="w-48 px-4 py-2 font-semibold">{attribute.name}</td>
                  <td>{attribute.value}</td>
                </tr>
              ))}
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
        work,
      },
    };
  }
  return {
    notFound: true,
  };
};
export default WorkDetail;
