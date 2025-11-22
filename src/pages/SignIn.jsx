import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-4">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="input input-bordered w-full bg-white/20 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="input input-bordered w-full bg-white/20 text-white"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn btn-primary w-full mt-2">Sign In</button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default SignIn;
