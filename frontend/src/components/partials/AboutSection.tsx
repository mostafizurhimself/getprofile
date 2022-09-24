import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import { RiOpenSourceLine } from 'react-icons/ri';

const AboutSection = () => {
  return (
    <div className="container py-6">
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I am Md Mostafizur Rahman, I am a fullstack developer. I work from Dhaka, Bangladesh. I have rich
            experience in building, designing & customizing website, web apps, mobile apps etc.
          </p>
          <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
            Download CV
          </Button>
        </div>
        {/* Overview */}
        <div className="grid grid-cols-2 gap-4 lg:-mt-4">
          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineFire size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">20+</h2>
              <p className="mt-1">Projects Completed</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-5 text-gray-300">
              <RiOpenSourceLine size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">30+</h2>
              <p className="mt-1">Opensouce Contribution</p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineUsers size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">15+</h2>
              <p className="mt-1">Satisfied clients</p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineChartBar size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">5+</h2>
              <p className="mt-1">Years of experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="">
          <div className="mb-3 flex justify-between">
            <h6 className="font-semibold">PHP</h6>
            <p>85%</p>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-md bg-gray-200">
            <div className="h-2 bg-blue-500" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="">
          <div className="mb-3 flex justify-between">
            <h6 className="font-semibold">Javascript</h6>
            <p>95%</p>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-md bg-gray-200">
            <div className="h-2 bg-yellow-400" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="">
          <div className="mb-3 flex justify-between">
            <h6 className="font-semibold">Laravel</h6>
            <p>90%</p>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-md bg-gray-200">
            <div className="h-2 bg-red-400" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="">
          <div className="mb-3 flex justify-between">
            <h6 className="font-semibold">Node JS</h6>
            <p>90%</p>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-md bg-gray-200">
            <div className="h-2 bg-green-400" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
