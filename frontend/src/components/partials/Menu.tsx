import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircle } from "react-feather";

type Props = {};

const Menu = (props: Props) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="header text-gray-700">
      <div className="max-w-7xl mx-auto flex items-center px-4 md:px-6 h-16">
        <Link href="/">
          <a className="text-3xl  font-bold">
            <span>Mostafizur</span>
            <span className="text-primary-500">.</span>
          </a>
        </Link>
        <ul className="hidden md:flex items-center ml-auto">
          <li>
            <Link href="/works">
              <a
                className={classNames(
                  "inline-block font-semibold px-4  hover:text-primary-600 hover:underline",
                  { "text-primary-500": router.asPath == "/works" }
                )}
              >
                Works
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                className={classNames(
                  "inline-block font-semibold px-4  hover:text-primary-600 hover:underline",
                  { "text-primary-500": router.asPath == "/blog" }
                )}
              >
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={classNames(
                  "inline-block font-semibold px-4  hover:text-primary-600 hover:underline",
                  { "text-primary-500": router.asPath == "/contact" }
                )}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex md:hidden ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform origin-right"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform origin-right"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-[#f9f9ff]">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="text-white">&#10006;</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 overflow-y-auto">
                <div className="px-2 border-b pb-4">
                  <Link href="/">
                    <a className="text-3xl  font-bold">
                      <span>Mostafizur</span>
                      <span className="text-primary-500">.</span>
                    </a>
                  </Link>
                </div>
                <nav className="px-2 space-y-1 mt-4">
                  <Link href="/works">
                    <a
                      className={classNames(
                        "group flex items-center px-2 py-2 text-base font-medium hover:text-primary-600",
                        { "text-primary-500": router.asPath == "/works" }
                      )}
                    >
                      Works
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a
                      className={classNames(
                        { "text-primary-500": router.asPath == "/blog" },
                        "group flex items-center px-2 py-2 text-base font-medium hover:text-primary-600"
                      )}
                    >
                      Blog
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      className={classNames(
                        { "text-primary-500": router.asPath == "/contact" },
                        "group flex items-center px-2 py-2 text-base font-medium hover:text-primary-600"
                      )}
                    >
                      Contact
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Menu;
