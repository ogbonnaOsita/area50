"use client";

import React, { useState, useEffect } from "react";
import CustomSelect from "../components/CustomSelect";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Bounce, toast } from "react-toastify";

const StartProjectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: null,
    description: "",
    attachments: null,
  });

  const [errors, setErrors] = useState({});

  // Reset form data and errors when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        projectType: null,
        description: "",
        attachments: null,
      });
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.projectType)
      newErrors.projectType = "Project type is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast
      .promise(
        fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formType: "startProject",
            ...formData,
          }),
        }).then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to submit the form.");
          }
          return response.json();
        }),
        {
          pending: "Submitting...",
          success: "Submitted successfully! We will get back to you soon.",
          error: "An error occurred. Please try again.",
        },
        {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
      )
      .then(() => {
        onClose(); // Close the modal on success
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="md:w-2/3 lg:w-1/3 w-full mx-4 bg-primary-dark text-white px-4 py-8 md:px-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Start a Project</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl"
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
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

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
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

          <CustomSelect
            title="Project type"
            selectedOption={formData.projectType}
            setSelectedOption={(option) =>
              setFormData({ ...formData, projectType: option })
            }
            error={errors.projectType}
            options={[
              { id: 1, name: "Web Development" },
              { id: 2, name: "Mobile App Development" },
              { id: 3, name: "Software Development" },
              { id: 4, name: "Digital Marketing" },
              { id: 5, name: "Other" },
            ]}
            label="Project Type"
          />
          {/* 
          <CustomSelect
            title="Budget"
            selectedOption={formData.budget}
            setSelectedOption={(option) =>
              setFormData({ ...formData, budget: option })
            }
            error={errors.budget}
            options={[
              { id: 1, name: "$1,000 - $5,000" },
              { id: 2, name: "$5,000 - $10,000" },
              { id: 3, name: "$10,000+" },
            ]}
            label="Budget"
          />

          <CustomSelect
            title="Timeline"
            selectedOption={formData.timeline}
            setSelectedOption={(option) =>
              setFormData({ ...formData, timeline: option })
            }
            error={errors.timeline}
            options={[
              { id: 1, name: "1-3 months" },
              { id: 2, name: "3-6 months" },
              { id: 3, name: "6+ months" },
            ]}
            label="Timeline"
          /> */}

          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Project Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full p-3 border ${
                errors.description ? "border-red-500" : "border-primary-main"
              } bg-primary-darker placeholder:text-white rounded-lg focus:outline-none`}
              placeholder="Describe your project"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
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
  );
};

export default StartProjectModal;
