import React from "react";

const Specialties = () => {
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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-3 p-6 text-center">
      {specialties.map((specialty, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center p-4  hover:shadow-md hover:bg-gray-100 focus:outline-none focus:bg-blue-100  transition-all duration-200"
        >
          {/* Icon */}
          <div className="text-3xl mb-2">{specialty.icon}</div>
          {/* Label */}
          <div className="text-sm font-medium text-gray-600">
            {specialty.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Specialties;
