"use client";

import { useState } from "react";
import StartProjectModal from "./components/StartProjectModal";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Navbar from "./sections/Navbar";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import ServicesCarousel from "./sections/ServicesCarousel";
import Showcase from "./sections/Showcase";
import WhyChooseUs from "./sections/WhyChooseUs";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Navbar openModal={openModal} />
      <Showcase openModal={openModal} />
      <About />
      <WhyChooseUs />
      <Services />
      <ServicesCarousel />
      <Portfolio />
      <Contact />
      {/* Render the modal */}
      <StartProjectModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
