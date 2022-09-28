import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      <a href="#" className="flex items-center rounded-lg bg-gray-200 px-4 py-2 text-gray-500 dark:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
      </a>

      <a
        href="#"
        className="rounded-lg bg-primary-500 px-4 py-2 text-white transition-colors duration-150 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500"
      >
        1
      </a>
      <a
        href="#"
        className="rounded-lg bg-gray-200 px-4  py-2 transition-colors duration-150 hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:hover:bg-primary-500"
      >
        2
      </a>
      <a
        href="#"
        className="rounded-lg bg-gray-200 px-4  py-2 transition-colors duration-150 hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:hover:bg-primary-500"
      >
        3
      </a>
      <a
        href="#"
        className="rounded-lg bg-gray-200 px-4 py-2 text-gray-500 transition-colors duration-150 hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:hover:bg-primary-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
};

export default Pagination;
