import React from "react";
import AcademicCap from "../icons/AcademicCap";
import DotBg from "./DotBg";
import styles from "@/styles/modules/ExperienceSection.module.scss";
import { Briefcase } from "react-feather";

type Props = {};

const ExperienceSection = (props: Props) => {
  return (
    <div className="py-16">
      <div className="relative">
        <DotBg className="h-8 w-8 absolute bottom-5" />
        <h3 className="text-4xl font-bold pl-3">Experience</h3>
      </div>
      <div className="py-15 grid sm:grid-cols-2 mt-10 gap-4 md:gap-8">
        {/* Experience */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg px-10 py-8">
            <ol className={styles["experience"]}>
              <li className={styles["experience-item"]}>
                <span className="flex absolute -left-3 justify-center items-center bg-white text-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <Briefcase className="h-5" />
                </span>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  2017-2019
                </time>
                <h3 className="flex items-center mb-1 text-lg font-semibold">
                  Web Administrator
                </h3>
                <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  Easy Fashion Ltd
                </p>
                <p className="mb-4 text-base font-normal text-gray-500">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </li>
              <li className={styles["experience-item"]}>
                <span className="flex absolute -left-3 justify-center items-center bg-white text-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <Briefcase className="h-5" />
                </span>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  2020-2021
                </time>
                <h3 className="mb-1 text-lg font-semibold">ICT Euro Ltd.</h3>
                <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  Fullstack Developer
                </p>
                <p className="text-base font-normal text-gray-500">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </li>
              <li className={styles["experience-item"]}>
                <span className="flex absolute -left-3 justify-center items-center bg-white text-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <Briefcase className="h-5" />
                </span>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  2021-Present
                </time>
                <h3 className="mb-1 text-lg font-semibold">Wedevs Ltd.</h3>
                <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  Fullstack Developer
                </p>
                <p className="text-base font-normal text-gray-500">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </li>
            </ol>
          </div>
        </div>
        {/* Education */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg px-10 py-8">
            <ol className={styles["experience"]}>
              <li className={styles["experience-item"]}>
                <span className="flex absolute -left-3 justify-center items-center bg-white text-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <AcademicCap />
                </span>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  2002-2012
                </time>
                <h3 className="flex items-center mb-1 text-lg font-semibold">
                  Secondary School Certificate
                </h3>
                <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  Khale Haider Memorial High School
                </p>
                <p className="mb-4 text-base font-normal text-gray-500">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </li>
              <li className={styles["experience-item"]}>
                <span className="flex absolute -left-3 justify-center items-center bg-white text-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <AcademicCap />
                </span>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  2002-2012
                </time>
                <h3 className="mb-1 text-lg font-semibold">
                  Diploma in Electrical Eng.
                </h3>
                <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  Western Ideal Institute
                </p>
                <p className="text-base font-normal text-gray-500">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
