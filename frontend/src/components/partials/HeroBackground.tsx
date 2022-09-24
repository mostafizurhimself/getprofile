import React from 'react';
import styles from '@/styles/modules/HeroBackground.module.scss';
import {
  FiBarChart2,
  FiBell,
  FiCircle,
  FiCloud,
  FiCode,
  FiHexagon,
  FiPieChart,
  FiStar,
  FiTerminal,
  FiTriangle,
} from 'react-icons/fi';

const HeroBackground = () => {
  return (
    <>
      <FiBarChart2 className="absolute top-60 left-10 text-teal-500 md:left-24" />
      <FiBell className="animate-bell absolute top-28 right-2/3 text-red-500" />
      <FiCode className="absolute top-48 right-1/2 animate-bounce text-indigo-500" />
      <FiPieChart className="animate-move absolute bottom-10 right-20 text-fuchsia-500 md:right-48" />
      <FiStar className="absolute top-36 right-10 text-yellow-500 md:right-24" />
      <FiTriangle className="animate-move-rotate absolute top-1/3 right-1/4 text-green-500" />
      <FiCloud className="absolute bottom-48 left-2/3 animate-pulse text-blue-500" />
      <FiCircle className="absolute bottom-20 left-16 animate-bounce text-amber-500 md:left-40" />
      <FiHexagon className="absolute top-96 left-1/4 animate-spin text-purple-500" />
      <FiTerminal className="absolute bottom-20 left-2/4 text-slate-500" />
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default HeroBackground;
