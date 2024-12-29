import React from "react";
import OutlineButton from "../components/OutlineButton";

const About = () => {
  return (
    <section
      className="bg-gradient-to-r from-primary-dark via-primary-darker to-primary-dark py-24"
      id="about"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            A Few Words About Us
          </h2>
          <p className="text-white leading-relaxed">
            Our company provides custom software development services to
            individual clients, start-ups, medium businesses, and large
            enterprises. You can find out more about who we are and what we do
            below.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          {/* Image Section */}
          <div className="w-full md:w-10/12 lg:w-6/12 xl:w-7/12 mb-8 lg:mb-0">
            <img src="/laptop.png" alt="About Us" className=" lg:w-[90%]" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-10/12 lg:w-6/12 xl:w-5/12 text-center lg:text-left">
            <div className="space-y-6">
              <p className="text-white leading-relaxed">
                AREA 50 is a world-class software development company with a
                mission to empower businesses and shape the future through
                innovation. Beyond building cutting edge applications powered by
                artificial intelligence, we ensure the world experiences their
                impact. From strategic launch campaigns to user engagement
                initiatives, we combine technical expertise with digital
                marketing mastery to deliver solutions that truly transform
                industries and connect with audiences globally.
              </p>

              {/* Progress Bars */}
              <div className="space-y-4 mb">
                {/* UI Design Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-medium">
                      Software Development
                    </p>
                    <span className="text-white">100%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                {/* Software Development Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-medium">Digital Marketing</p>
                    <span className="text-white">100%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Call-to-Action Button */}
            <div className="mt-12">
                <OutlineButton link="/" text="Contact Us" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
