import React from "react";
import {
  FaPenFancy,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaLaptopCode,
  FaBookOpen,
} from "react-icons/fa";

export default function WhyChooseUsPage() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose WriteFlow
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            WriteFlow empowers writers and creators with simplicity, speed, and
            security — the essentials for modern storytelling. Here’s why
            thousands of creators trust us.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaPenFancy className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
            <p className="text-gray-600">
              A clean, distraction‑free interface that keeps the focus on your
              words.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaLightbulb className="text-amber-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-gray-600">
              A platform that celebrates your voice and helps you craft stories
              that inspire readers worldwide.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaBolt className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Speed</h3>
            <p className="text-gray-600">
              Lightning‑fast performance ensures your stories reach your
              audience instantly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaShieldAlt className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-600">
              Your content is protected with best‑in‑class privacy and data
              security.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaUsers className="text-pink-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Connect with fellow writers, share feedback, and grow together in
              a supportive environment.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaLightbulb className="text-amber-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-gray-600">
              A platform that celebrates your voice and helps you craft stories
              that inspire readers worldwide.
            </p>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-4xl h-64 bg-linear-to-tr from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center shadow-md">
            <span className="text-purple-500 text-xl font-semibold">
              <div className="flex flex-wrap justify-center gap-10 text-purple-600">
                <FaPenFancy className="text-6xl hover:scale-110 transition-transform" />
                <FaLightbulb className="text-6xl text-amber-500 hover:scale-110 transition-transform" />
                <FaUsers className="text-6xl text-pink-500 hover:scale-110 transition-transform" />
                <FaBookOpen className="text-6xl text-blue-500 hover:scale-110 transition-transform" />
                <FaLaptopCode className="text-6xl text-green-500 hover:scale-110 transition-transform" />
              </div>
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to share your story?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join WriteFlow today and experience the future of blogging.
          </p>
          <button className="btn btn-primary px-8 py-3 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
