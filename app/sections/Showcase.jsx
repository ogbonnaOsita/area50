"use client";

import OutlineButton from "../components/OutlineButton";

const Showcase = ({ openModal }) => {
  return (
    <section
      id="showcase"
      className="bg-[#0F0F0F] text-white min-h-[90svh] bg-pattern bg-repeat flex items-center justify-center py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/bg3.jpg')`,
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl md:text-5xl text-3xl mb-4 font-bold text-white">
            Creating the future,&nbsp;<br className="hidden lg:inline-block" />
            today
          </h1>
          <p className="mb-8 leading-relaxed">
            Your one-stop digitial software solutions company. At Area50, we
            thrive on transforming your ideas into cutting-edge digital
            solutions.
          </p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={openModal}
              className="text-white uppercase bg-gradient-to-r from-primary-main via-primary-darker to-primary-dark hover:bg-gradient-to-br font-medium rounded text-xs md:text-sm px-7 py-3 text-center mr-2 mb-2 transition-all duration-300 ease-in-out"
            >
              Start a project
            </button>
            <OutlineButton link="#contact" text="Contact us" />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2">
          <img src="/showcase2.svg" alt="" className="w-[30rem]" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
