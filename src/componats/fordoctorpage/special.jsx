import React from "react";
import { useGlobalState } from "../../GlobalStateProvider"; // Ensure the path is correct

const Specialties = () => {
  const { globalState, setGlobalState } = useGlobalState();

  // Data for each specialty
  const specialties = [
    { icon: "📍", label: "Psychiatrist" },
    { icon: "❤️", label: "Cardiologist" },
    { icon: "🧴", label: "Dermatologist" },
    { icon: "🍬", label: "Endocrinologist" },
    { icon: "🍽️", label: "Gastroenterologist" },
    { icon: "🩸", label: "Hematologist" },
    { icon: "🫁", label: "Nephrologist" },
    { icon: "🧠", label: "Neurologist" },
    { icon: "🩺", label: "Oncologist" },
    { icon: "👁️", label: "Ophthalmologist" },
  ];

  // Function to handle button clicks
  const handleSpecialtyClick = (specialty) => {
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

    fetch(`http://localhost:9090/api/doctor/search?expertise=${specialty}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setGlobalState({ ...globalState, doctors: result }); // Update global state with the fetched data
        console.log(`Fetched data for ${specialty}:`, result);
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-3 p-6 text-center">
      {specialties.map((specialty, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center p-4 hover:shadow-md hover:bg-gray-100 focus:outline-none focus:bg-blue-100 transition-all duration-200"
          onClick={() => handleSpecialtyClick(specialty.label)} // Trigger fetch on button click
        >
          {/* Icon */}
          <div className="text-3xl mb-2">{specialty.icon}</div>
          {/* Label */}
          <div className="text-sm font-medium text-gray-600">{specialty.label}</div>
        </button>
      ))}
    </div>
  );
};

export default Specialties;
