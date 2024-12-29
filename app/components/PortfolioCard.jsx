import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ ImageHref, title, link, alt }) => {
  return (
    <div className={`w-full px-4 md:w-1/2 xl:w-1/4`}>
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]">
          <Image
            src={ImageHref}
            alt={alt || title || "portfolio"}
            width={400}
            height={300}
            className="w-full aspect-[5/3] object-top"
          />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-primary-main py-[34px] px-3 text-center shadow-portfolio">
          <h3 className="text-dark text-xl font-bold mb-5">{title}</h3>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-md border border-primary-darker py-[10px] px-7 text-sm font-medium transition hover:text-white hover:bg-primary-darker duration-300 ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
