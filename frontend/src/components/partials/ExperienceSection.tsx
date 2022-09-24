import styles from '@/styles/modules/ExperienceSection.module.scss';
import { Education, Experience } from '@/types';
import { FiBriefcase } from 'react-icons/fi';
import AcademicCap from '../icons/AcademicCap';
import SectionTitle from '../shared/SectionTitle';

const experiences: Experience[] = [
  {
    jobTitle: 'Frontend Developer',
    company: 'Google LLC',
    startDate: 'Jan 2017',
    endDate: 'Dec 2018',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },

  {
    jobTitle: 'Fullstack Developer',
    company: 'Amazon Inc.',
    startDate: 'Jan 2019',
    endDate: 'Dec 2021',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },

  {
    jobTitle: 'Senior Fullstack Developer',
    company: 'Facebook Inc.',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
];

const educations: Education[] = [
  {
    degree: 'Bachelor of Science',
    school: 'University of California',
    startDate: 'Jan 2017',
    endDate: 'Dec 2018',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    degree: 'Master of Science',
    school: 'University of California',
    startDate: 'Jan 2019',
    endDate: 'Dec 2021',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    degree: 'Doctor of Philosophy',
    school: 'University of California',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
];

const ExperienceSection = () => {
  return (
    <div className="container py-16">
      <SectionTitle>Experiences</SectionTitle>
      <div className="py-15 mt-10 grid gap-8 md:grid-cols-2">
        {/* Experience */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg">
            <ol className={styles['experience']}>
              {experiences.map((experience, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-3 flex items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <FiBriefcase className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
                    {experience.startDate} - {experience.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold">{experience.jobTitle}</h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400">{experience.company}</p>
                  <p className="mb-4 text-base font-normal text-gray-500">{experience.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Education */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg">
            <ol className={styles['experience']}>
              {educations.map((education, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-3 flex items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <AcademicCap />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
                    {education.startDate} - {education.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold">{education.degree}</h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400">{education.school}</p>
                  <p className="mb-4 text-base font-normal text-gray-500">{education.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
