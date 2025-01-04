import React, { useRef, useState } from "react";
import WeeklySchedule from "../componats/cal";

const DocSignup = () => {
  const [specializations] = useState([
    "General Medicine",
    "Internal Medicine",
    "Dermatologist",
    "Neurology",
    "Pathology",
  ]);

  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    console.log("Form Submitted");
    // Handle form submission logic here (e.g., API call or form processing)
  };

  return (
    <div className="flex justify-center  bg-white min-h-screen w-full">
      {/* Left Section - Form */}
      <div className="w-full pt-10 pl-20">
        <h1 className="text-3xl font-bold mb-6 justify-center p-50">Please Enter Your Information</h1>

        {/* Form */}
        <div className=" w-full">
        <form className="space-y-3  justify-evenly"
        onSubmit={handleFormSubmit}>
          {/* Name */}

          <div className="flex justify-evenly">
          <div>
          <div className="pt-8">
            <label className="block text-lg font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Email */}
          <div className="pt-8">
            <label className="block text-lg font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Password */}
          <div className="pt-8">
            <label className="block text-lg font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 "
            />
          </div>

          {/* Contact Number */}
          <div className="pt-8">
            <label className="block text-lg font-medium">Contact Number</label>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Specialization Dropdown */}
          <div className="pt-8">
            <label className="block text-lg font-medium">Your Specialization</label>
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="" disabled>
                Choose your specialization
              </option>
              {specializations.map((specialization, index) => (
                <option key={index} value={specialization}>
                  {specialization}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div className="relative w-full pt-8">
            <label className="block text-lg font-medium mb-2">Upload Your Image</label>
            <div className="flex items-center border rounded-lg w-full">
              {/* Input Element */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="hidden"
              />
              {/* Display File Name */}
              <span className="flex-grow px-4 py-2">
                {image ? image.name : "No file chosen"}
              </span>
              {/* Suffix Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600"
              >
                Upload
              </button>
            </div>
          </div>
          </div>

          {/* Weekly Schedule */}
          
          <WeeklySchedule></WeeklySchedule>
          </div>


          <div className="mt-20 pt-20 pb-32">
            <button
              type="submit"
              className="w-10p bg-black text-white py-2 px-4 rounded-lg"
              
            >
              Submit
            </button>
          </div>  
          

        </form>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/3 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-image.jpg')" }}></div>
    </div>
  );
};

export default DocSignup;
