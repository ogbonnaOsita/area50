"use client";

import { useState } from "react";

const CustomSelect = ({
  selectedOption,
  setSelectedOption,
  error,
  options,
  title = "You are looking to:",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <label
        id="listbox-label"
        className="block text-sm font-medium text-white"
      >
        {title}
      </label>
      <div className="relative mt-2">
        <button
          type="button"
          className={`grid w-full cursor-default grid-cols-1 rounded-lg p-3 pr-2 text-left text-gray-900 border ${
            error ? "border-red-500" : "border-primary-main"
          } bg-primary-darker sm:text-sm`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="listbox-label"
          onClick={toggleDropdown}
        >
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-white">
            {selectedOption ? selectedOption.name : "Select an option"}
          </span>
          <svg
            className="col-start-1 row-start-1 h-5 w-5 self-center justify-self-end text-white sm:h-4 sm:w-4"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-primary-darker py-1 text-base shadow-lg shadow-primary-dark ring-1 ring-black/5 focus:outline-none sm:text-sm"
            role="listbox"
            aria-labelledby="listbox-label"
          >
            {options.map((option) => (
              <li
                key={option.id}
                className={`relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-primary-main hover:text-black ${
                  selectedOption && selectedOption.id === option.id
                    ? "bg-primary-main text-black"
                    : "text-white"
                }`}
                role="option"
                onClick={() => selectOption(option)}
              >
                <span
                  className={`block truncate ${
                    selectedOption && selectedOption.id === option.id
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                >
                  {option.name}
                </span>

                {selectedOption && selectedOption.id === option.id && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelect;
