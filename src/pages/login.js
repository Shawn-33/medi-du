import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const nav=useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-96 bg-white shadow-lg rounded-lg px-8 py-10">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-1">Welcome back!</h1>
        <p className="text-sm text-center mb-6 text-gray-600">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <a
              href="/forgot-password"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm">
              Remember for 30 days
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-indigo-900"
          >
            Login
          </button>
        </form>

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
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 underline" onClick={()=>nav("/signup")}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
