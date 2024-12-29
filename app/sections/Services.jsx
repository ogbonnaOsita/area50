import React from "react";
import { MdOutlineAutoMode } from "react-icons/md";

const Services = () => {
  return (
    <div
      className="bg-black"
      id="services"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/pattern2.webp')`,
      // }}
    >
      <div className="relative">
        <div className="items-center max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          {/* Intro Section */}
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-primary-main dark:text-primary-main">
              Crafting smarter solutions for a brighter future
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl dark:text-white">
              Our Services
            </h2>
            <p className="font-light text-white sm:text-xl">
              At Area50, we focus on creating intelligent software and
              applications that transform your business operations. We integrate
              the latest in artificial intelligence to offer solutions tailored
              to your unique needs.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-base font-medium text-white dark:text-gray-300">
                Our offerings include:
              </p>
              <ul className="list-disc list-inside text-white">
                <li>Custom Software Development</li>
                <li>AI Integration for Business Processes</li>
                <li>Web and Mobile Application Development</li>
                <li>Automation and Optimization Tools</li>
              </ul>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 text-white">
            {/* Service 1 */}
            <div>
              <svg
                className="w-10 h-10 mb-2 text-primary-main md:w-12 md:h-12 dark:text-primary-main"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Custom Software
              </h3>
              <p className="font-light text-white">
                Tailored software solutions to meet your unique business needs.
              </p>
            </div>

            {/* Service 2 */}
            <div>
              <svg
                className="w-10 h-10 mb-2 text-primary-main md:w-12 md:h-12 dark:text-primary-main"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                AI Integration
              </h3>
              <p className="font-light text-white">
                Harness the power of AI to optimize your business operations.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <svg
                className="w-10 h-10 mb-2 text-primary-main md:w-12 md:h-12 dark:text-primary-main"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Advanced Applications
              </h3>
              <p className="font-light text-white">
                Cutting-edge web and mobile app development for your business.
              </p>
            </div>

            {/* Service 4 */}
            <div>
              <MdOutlineAutoMode className="w-10 h-10 mb-2 text-primary-main md:w-12 md:h-12 dark:text-primary-main" />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Automation Tools
              </h3>
              <p className="font-light text-white">
                Streamline processes with advanced automation solutions.
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left bottom, rgba(86, 227, 86, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgba(53,122,53, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
