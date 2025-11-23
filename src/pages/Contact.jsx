import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-[#071629] text-white min-h-screen py-16 px-6 md:px-20">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Section: Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We're here to help you with any questions, service issues, or support
            you need. Reach out and our team will respond quickly.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">📞 Hotline</h3>
              <p className="text-gray-300">1234 5678</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">📍 Address</h3>
              <p className="text-gray-300">Dhaka, Bangladesh (All Zones Covered)</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">⏰ Working Hours</h3>
              <p className="text-gray-300">Urgent/Repair: 24/7 Hotline</p>
              <p className="text-gray-300">Standard Booking: 9 AM - 8 PM</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-2xl">
              <span className="cursor-pointer hover:text-blue-400">📘</span>
              <span className="cursor-pointer hover:text-pink-400">📸</span>
              <span className="cursor-pointer hover:text-blue-300">🐦</span>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="bg-[#0c213c] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-[#071c30] border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-[#071c30] border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-lg bg-[#071c30] border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
