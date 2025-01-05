import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CliSignin = () => {
  const nav =useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
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
      console.log("jjjjjjjjj             kkkkkkkk             kk")
      const response = await fetch("http://localhost:9090/api/user/login", requestOptions);
      console.log("snadka skandkwnd sa dwknnd");
      console.log(response);
      const result = await response.text();
      console.log("snadka skandkwnd sa dwknnd");
      console.log(result)

      if (response.status === 200) {
        // Save token to localStorage
        localStorage.setItem("token", result.token);
        setMessage("Login Successful!");
        nav("/")
      } else {
        setMessage(`Error: ${result.message || "Invalid credentials"}`);
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
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-indigo-900"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <div
            className={`mt-4 text-center ${
              message === "Login Successful!" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="px-2 text-sm text-gray-500">Or</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Social Login */}
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

        {/* Footer */}
        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default CliSignin;
