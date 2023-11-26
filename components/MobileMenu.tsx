'use client'
import { useState } from "react";
import Link from 'next/link'
import Beta from "./Beta";
import ThemeSwitcher from "./ThemeSwitcher";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  return (
    <>
      <div className="flex justify-between py-4 mx-4 md:hidden">
        <div className="flex flex-row text-lg font-bold">
          <div className="pr-1 place-self-center">StefanoCislaghi </div>
          <Beta />
        </div>

        <div className="flex">
          <ThemeSwitcher />
          <button
            type="button"
            className="pl-2"
            aria-label="toggle menu"
            onClick={() => toggleMenu()}
          >
            {!isMenuOpen && (
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="false"
                className="text-stefano-900 dark:text-stefano-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
            )}
            {isMenuOpen && (
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="false"
                width="24"
                height="24"
                className="text-stefano-900 dark:text-stefano-300"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 text-indigo-900 transition-all duration-300 ease-in-out bg-deep-purple-50 bg-stefano-50 dark:bg-stefano-900 dark:text-indigo-50 md:hidden">
          <div className="flex flex-col font-bold md:hidden">
            <Link className="my-2 md:mx-4 md:my-0" href="#">
              Home
            </Link>
            <Link className="my-2 md:mx-4 md:my-0" href="/bio">
              Bio
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
