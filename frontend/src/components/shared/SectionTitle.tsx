import React from "react";
import DotBg from "@/components/partials/DotBg";

const SectionTitle: React.FunctionComponent = ({ children }) => {
  return (
    <div className="relative">
      <DotBg className="h-8 w-8 absolute bottom-5" />
      <h3 className="text-4xl font-bold pl-3">{children}</h3>
    </div>
  );
};

export default SectionTitle;
