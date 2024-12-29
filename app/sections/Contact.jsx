"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import CustomSelect from "../components/CustomSelect";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedOption: {
      id: 1,
      name: "Make enquiry",
    },
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must be 7-15 digits long and may start with a '+'.";
    }

    // Message validation
    if (!formData.message.trim()) newErrors.message = "Message is required";

    // CustomSelect validation
    if (!formData.selectedOption) {
      newErrors.selectedOption = "Please select an option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      // You can send the formData to your API or backend here.
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div
      className="relative bg-black px-6 py-10 md:py-20 md:px-10"
      id="contact"
    >
      {/* Content Overlay */}
      <div className="container mx-auto py-16 lg:flex gap-10 lg:items-center lg:justify-between relative z-10 text-white">
        {/* Left Section: Contact Info */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">
            Feel free to contact us! Submit your queries here, and we will get
            back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl text-primary-main">
                <FiPhone />
              </span>
              <p className="text-lg">+2348033466169</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl text-primary-main">
                <FiMail />
              </span>
              <p className="text-lg">area50technologies@gmail.com</p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="mt-6 flex space-x-4 text-primary-main">
            <a
              href="https://wa.me/+2348033466169"
              target="_blank"
              className="text-lg outline-primary-main border border-primary-main p-3 rounded-full"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/area50_technologies/profilecard/?igsh=MWVvZzA5czVzYjJvOA=="
              target="_blank"
              className="text-lg outline-primary-main border border-primary-main p-3 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              target="_blank"
              className="text-lg outline-primary-main border border-primary-main p-3 rounded-full"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2 bg-primary-dark text-white px-4 py-8 md:px-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-primary-main"
                } bg-primary-darker placeholder:text-white rounded-lg focus:outline-none`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-500" : "border-primary-main"
                  } bg-primary-darker placeholder:text-white rounded-lg focus:outline-none`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    errors.phone ? "border-red-500" : "border-primary-main"
                  } bg-primary-darker placeholder:text-white rounded-lg focus:outline-none`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <CustomSelect
              selectedOption={formData.selectedOption}
              setSelectedOption={(option) =>
                setFormData({ ...formData, selectedOption: option })
              }
              options={[
                {
                  id: 1,
                  name: "Make enquiry",
                },
                {
                  id: 2,
                  name: "Invest",
                },
              ]}
            />
            {errors.selectedOption && (
              <p className="text-red-500 text-sm mt-1">
                {errors.selectedOption}
              </p>
            )}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-primary-main"
                } bg-primary-darker placeholder:text-white rounded-lg focus:outline-none`}
                rows="4"
                placeholder="Enter your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary-darker text-white font-medium p-3 rounded-lg hover:bg-[#0b130b] focus:outline-none duration-300 transition-all ease-in-out"
            >
              Submit
            </button>
          </form>
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
  );
};

export default Contact;
