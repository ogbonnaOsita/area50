import React from "react";

const BackgroundForeground = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/pattern2.webp')`,
      }}
    >
      {/* Foreground content */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden h-[40%] bg-black">

      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between relative z-10 text-white">
        {/* Left Section: Contact Info */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">
            Feel free to contact us! Submit your queries here, and we will get
            back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <p className="text-lg">470-601-1911</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <p className="text-lg">Pagedone1234@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <p className="text-lg">789 Oak Lane, Lakeside, TX 54321</p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="/" className="text-lg bg-blue-800 p-3 rounded-full">
              🌐
            </a>
            <a href="/" className="text-lg bg-blue-800 p-3 rounded-full">
              🌐
            </a>
            <a href="/" className="text-lg bg-blue-800 p-3 rounded-full">
              📸
            </a>
            <a href="/" className="text-lg bg-blue-800 p-3 rounded-full">
              ✖️
            </a>
            <a href="/" className="text-lg bg-blue-800 p-3 rounded-full">
              🔗
            </a>
            <a href="/" className="text-lg bg-blue-800 p-3 rounded-full">
              ▶️
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2 bg-primary-dark text-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BackgroundForeground;
