import React from "react";

const PortfolioCard = ({ ImageHref, title, link }) => {
  return (
    <div className={`w-full px-4 md:w-1/2 xl:w-1/4`}>
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={ImageHref}
            alt={title || "portfolio"}
            className="w-full aspect-[4/3] "
          />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-primary-main py-[34px] px-3 text-center shadow-portfolio">
          <h3 className="text-dark text-xl font-bold mb-5">{title}</h3>
          <a
            href={link}
            target="_blank"
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-md border border-primary-darker py-[10px] px-7 text-sm font-medium transition hover:text-white hover:bg-primary-darker duration-300 ease-in-out"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;