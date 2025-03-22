import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Login Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Login Page</h2>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button as Link */}
          <Link 
            to="/dashboard"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-500 transition duration-300 text-lg font-semibold shadow-lg"
          >
            Login
          </Link>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? 
          <Link to="/signup" className="text-blue-600 hover:underline ml-1">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;