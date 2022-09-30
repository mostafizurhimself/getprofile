import Link from 'next/link';
import React from 'react';

interface Breadcrumb {
  label: string;
  path: string;
}

type Props = {
  breadcrumb: Breadcrumb[];
  children: React.ReactNode;
};

const PageTitle: React.FunctionComponent<Props> = ({ children, breadcrumb = [] }) => {
  return (
    <div className="container flex h-48 flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">{children}</h1>

      <div className="flex text-sm uppercase">
        {breadcrumb.map((item, index) => {
          return (
            <div key={index}>
              {item.path && (
                <Link href={item.path}>
                  <a className="">{item.label}</a>
                </Link>
              )}

              {!item.path && <span className="text-gray-400">{item.label}</span>}

              {index !== breadcrumb.length - 1 && <span className="px-2 text-primary-500">/</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageTitle;
