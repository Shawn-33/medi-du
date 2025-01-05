import React, { useState } from "react";
import { useGlobalState } from "../../GlobalStateProvider"; // Ensure this path is correct

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { globalState, setGlobalState } = useGlobalState();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`http://localhost:9090/api/doctor/search?name=${searchQuery}`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          setGlobalState({ ...globalState, doctors: result });
          console.log("Search results updated in global state:", result);
        })
        .catch((error) => console.error("Fetch error:", error));
    }
  };

  return (
    <div className="flex items-center w-full max-w-xl border rounded-full shadow-sm overflow-hidden">
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
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search Here..."
        className="w-full px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
