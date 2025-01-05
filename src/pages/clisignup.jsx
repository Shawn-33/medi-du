import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CliSignup = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    number: "",
    expertise: "",
    degree: "",
    image: "",
    schedule: "",
    credential: "",
    deskid: "",
    verified: false,
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("http://localhost:9090/api/user/signup", requestOptions);
      const result = await response.text();

      if (response.status === 200) {
        setMessage("Registration Successful!");
        nav("/login");
      } else {
        setMessage(`Error: ${result}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-96 bg-white shadow-lg rounded-lg px-8 py-10">
        <h1 className="text-2xl font-bold text-center mb-6">Get Started Now</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              id="number"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Terms and Policy */}
          <div className="flex items-center">
            <input
              id="verified"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={formData.verified}
              onChange={handleInputChange}
            />
            <label className="ml-2 text-sm">
              I agree to the{" "}
              <span className="text-indigo-600 underline">terms & policy</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-indigo-900"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Signup"}
          </button>
        </form>

        {message && (
          <div
            className={`mt-4 text-center ${
              message.startsWith("Registration Successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="px-2 text-sm text-gray-500">Or</span>
          <div className="flex-grow border-t"></div>
        </div>

        <div className="flex justify-between gap-2">
          <button className="flex items-center justify-center w-1/2 border rounded-lg py-2 hover:shadow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center w-1/2 border rounded-lg py-2 hover:shadow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5 mr-2"
            />
            Sign in with Apple
          </button>
        </div>

        <p className="text-sm text-center mt-6">
          Have an account?{" "}
          <a href="/signin" className="text-indigo-600 underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default CliSignup;
