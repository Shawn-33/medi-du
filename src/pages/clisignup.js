import React from "react";

const CliSignup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-96 bg-white shadow-lg rounded-lg px-8 py-10">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6">Get Started Now</h1>

        {/* Form */}
        <form className="space-y-4">
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
            />
          </div>

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
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Terms and Policy */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
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
          >
            Signup
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
