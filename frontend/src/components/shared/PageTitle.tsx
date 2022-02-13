import Link from "next/link";
import React from "react";

interface Breadcrumb {
  label: string;
  path: string;
}

type Props = {
  breadcrumb: Breadcrumb[];
};

const PageTitle: React.FunctionComponent<Props> = ({
  children,
  breadcrumb = [],
}) => {
  return (
    <div className="h-48 flex flex-col justify-center items-center container">
      <h1 className="text-4xl font-bold mb-4">{children}</h1>

      <div className="flex uppercase text-sm">
        {breadcrumb.map((item, index) => {
          return (
            <div key={index}>
              {item.path && (
                <Link href={item.path}>
                  <a className="">{item.label}</a>
                </Link>
              )}

              {!item.path && (
                <span className="text-gray-400">{item.label}</span>
              )}

              {index !== breadcrumb.length - 1 && (
                <span className="px-2 text-primary-500">/</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageTitle;
