import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const nav=useNavigate();
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <h1 className="text-4xl font-bold mb-4">Let's Get Started</h1>
        <p className="text-gray-500 mb-8">Please tell us your profession</p>
        <div className="space-y-4 w-1/2">
          <button className="w-full py-3 bg-black text-white rounded-full hover:opacity-90" onClick={()=>nav("/cli")}>
            Client
          </button>
          <button className="w-full py-3 bg-black text-white rounded-full hover:opacity-90" onClick={()=>nav("/docsignup")}>
            Doctor
          </button>
          <button className="w-full py-3 bg-black text-white rounded-full hover:opacity-90" >
            Diagnosis
          </button>
          <button className="w-full py-3 bg-black text-white rounded-full hover:opacity-90">
            Receptionist
          </button>
        </div>
      </div>

      {/* Right Section */}
      
    </div>
  );
};

export default SignUp;
