const ServicesCarousel = () => {
  return (
    <main className="relative flex flex-col justify-center bg-primary-main overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 py-8">
        <div className="text-center">
          {/* Service Carousel Animation */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul
              className="flex items-center animate-infinite-scroll text-lg font-semibold text-black whitespace-nowrap"
              style={{
                animation: "infinite-scroll 25s linear infinite",
              }}
            >
              {[
                "Custom Software Development",
                "Mobile App Development",
                "Web App Design & Development",
                "API Integration Services",
                "Cloud Solutions",
                "UI/UX Design",
                "E-commerce Solutions",
                "IT Consulting Services",
                "AI & Machine Learning Solutions",
                "Customer Support Tools",
                "SaaS Development",
                "IoT Solutions",
              ].map((service, index) => (
                <li key={index} className="mx-8">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          {/* End: Service Carousel Animation */}
        </div>
      </div>
    </main>
  );
};

export default ServicesCarousel;
