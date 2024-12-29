import { MdMobileFriendly } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { PiHandTap } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="bg-black" id="#why-us">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 bg-black"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-primary-dark bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Unlock your digital potential
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Our clients have been choosing Area 50 for a number of reasons
            including reliability, latest technologies, and constant updates &
            support.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-4 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Powerful Apps",
              description:
                "Our team offers a wide variety of powerful and sustainable apps.",
              icon: <MdMobileFriendly />,
            },
            {
              title: "Innovative Technologies",
              description:
                "Our developers use the latest technologies to deliver the best apps.",
              icon: <TbBulb />,
            },
            {
              title: "Great Usability",
              description:
                "Improved usability and UX are distinctive features of our products.",
              icon: <PiHandTap />,
            },
            {
              title: "Efficient Support",
              description:
                "Softlabs offers extensive support to its customers all over the world.",
              icon: <MdOutlineSupportAgent />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow hover:bg-primary-main hover:text-primary-darker text-gray-400 duration-300 transition-all ease-in-out"
            >
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border text-primary-darker bg-primary-main border-primary-darker">
                {item.icon}
              </div>
              <h3 className="mt-6">{item.title}</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(53,122,53, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(86, 227, 86, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
