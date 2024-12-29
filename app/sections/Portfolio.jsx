"use client";

import React from "react";
import Image from "next/image";
import PortfolioCard from "../components/PortfolioCard";
import projects from "../lib/projects";

const Portfolio = () => {
  return (
    <div
      id="projects"
      className="bg-black relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/pattern2.webp')`,
      }}
    >
      <section
        id="features"
        className="relative block px-6 py-10 md:py-24 md:px-10 bg-black"
      >
        <section className="">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 text-white">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                  <span className="text-primary mb-2 block text-lg font-semibold">
                    Our Portfolio
                  </span>
                  <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                    Our Recent Projects
                  </h2>
                  <p className="text-body-color text-base dark:text-dark-6">
                    Showcasing Excellence: A Glimpse into Our Journey of
                    Transforming Ideas into Impactful Solutions That Drive
                    Growth and Innovation"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-4">
              {projects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  ImageHref={project.ImageHref}
                  title={project.title}
                  link={project.link}
                  alt={project.alt}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Larger and sharper corner light effects */}
        <div
          className="absolute top-0 right-0 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(86, 227, 86, 0.5) 0%, rgba(86, 227, 86, 0.2) 40%, transparent 70%)",
            transform: "translate(50%, -50%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(53,122,53, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Portfolio;
