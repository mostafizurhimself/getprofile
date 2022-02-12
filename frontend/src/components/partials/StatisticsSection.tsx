import React from "react";
import Fire from "@/components/icons/Fire";
import Coffee from "@/components/icons/Coffee";
import Users from "../icons/Users";
import BarChart from "../icons/BarChart";

type Props = {};

const StatisticsSection = (props: Props) => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="flex">
        <div className="text-gray-300 mr-5">
          <Fire className="h-10" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">20+</h2>
          <p className="mt-2">Projects Completed</p>
        </div>
      </div>
      <div className="flex">
        <div className="text-gray-300 mr-5">
          <Coffee className="h-10" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">50+</h2>
          <p className="mt-2">Cup of coffe</p>
        </div>
      </div>

      <div className="flex">
        <div className="text-gray-300 mr-5">
          <Users className="h-10" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">20+</h2>
          <p className="mt-2">Satisfied clients</p>
        </div>
      </div>

      <div className="flex">
        <div className="text-gray-300 mr-5">
          <BarChart className="h-10" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">5+</h2>
          <p className="mt-2">Years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
