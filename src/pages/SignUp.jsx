import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-4">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="input input-bordered w-full bg-white/20 text-white"
              placeholder="Enter your name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <button className="btn btn-primary w-full mt-2">Sign Up</button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-400 hover:underline">
              Sign In
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default SignUp;
