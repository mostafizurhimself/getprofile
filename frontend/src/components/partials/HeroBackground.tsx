import React from "react";
import styles from "@/styles/modules/HeroBackground.module.scss";
import {
  BarChart2,
  Bell,
  Circle,
  Cloud,
  Code,
  Hexagon,
  PieChart,
  Star,
  Terminal,
  Triangle,
} from "react-feather";

const HeroBackground = () => {
  return (
    <>
      <BarChart2 className="absolute top-60 left-10 md:left-24 text-teal-500" />
      <Bell className="absolute top-28 right-2/3 text-red-500 animate-bell" />
      <Code className="absolute top-48 right-1/2 text-indigo-500 animate-bounce" />
      <PieChart className="absolute bottom-10 right-20 md:right-48 text-fuchsia-500 animate-move" />
      <Star className="absolute top-36 right-10 md:right-24 text-yellow-500" />
      <Triangle className="absolute top-1/3 right-1/4 text-green-500 animate-move-rotate" />
      <Cloud className="absolute bottom-48 left-2/3 text-blue-500 animate-pulse" />
      <Circle className="absolute bottom-20 left-16 md:left-40 text-amber-500 animate-bounce" />
      <Hexagon className="absolute top-96 left-1/4 text-purple-500 animate-spin" />
      {/* <Terminal className="absolute bottom-20 left-2/4 text-slate-500" /> */}
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
