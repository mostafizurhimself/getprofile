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
  FiTriangle,
} from 'react-icons/fi';

const HeroBackground = () => {
  return (
    <>
      <FiBarChart2 size={30} className="absolute top-60 left-10 text-teal-500 md:left-24" />
      <FiBell size={30} className="animate-bell absolute top-28 right-2/3 text-red-500" />
      <FiCode size={30} className="absolute top-48 right-1/2 animate-bounce text-indigo-500" />
      <FiPieChart size={30} className="animate-move absolute bottom-10 right-20 text-fuchsia-500 md:right-48" />
      <FiStar size={30} className="absolute top-36 right-10 text-yellow-500 md:right-24" />
      <FiTriangle size={30} className="animate-move-rotate absolute top-1/3 right-1/4 text-green-500" />
      <FiCloud size={30} className="absolute bottom-48 left-2/3 animate-pulse text-blue-500" />
      <FiCircle size={30} className="absolute bottom-20 left-16 animate-bounce text-amber-500 md:left-40" />
      <FiHexagon size={30} className="absolute top-96 left-1/4 animate-spin text-purple-500" />
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
