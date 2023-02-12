import { Open_Sans } from "@next/font/google";
import React, { ReactNode } from "react";

import Footer from "./footer";
import Navbar from "./navbar";

const lato = Open_Sans({
  subsets: ["latin"],
  variable: "--font-lato",
});

interface Props {
  children?: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <main className={`${lato.variable} font-sans`}>
      <div className="flex min-h-screen text-stefano-800 bg-stefano-50 dark:bg-stefano-900 dark:text-stefano-300">
        <div className="container flex flex-col justify-between">
          {/* Cookie banner */}
          {/* <div className="fixed w-11/12 p-5 bg-white border rounded-md shadow-lg h-5/6 md:bottom-8 md:left-8 md:w-96">
            <div className="mt-3 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Successful!
              </h3>
              <div className="py-3 mt-2 px-7">
                <p className="text-sm text-gray-500">
                  Account has been successfully registered!
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="w-full px-4 py-2 text-base font-medium text-white bg-green-500 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  OK
                </button>
              </div>
            </div>
          </div> */}
          <Navbar />
          <div className="align-center" {...props}>
            {children}
          </div>
          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
      <Footer />
    </main>
  );
}
