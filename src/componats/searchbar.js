import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-xl border rounded-full shadow-sm overflow-hidden">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-12 h-12 bg-yellow-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
          />
        </svg>
      </div>
      {/* Input Section */}
      <input
        type="text"
        placeholder="Search Here..."
        className="w-full px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
