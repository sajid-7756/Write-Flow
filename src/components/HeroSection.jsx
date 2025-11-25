"use client";
import {
  FaFileAlt,
  FaLaptopCode,
  FaLightbulb,
  FaPenFancy,
  FaShieldAlt,
} from "react-icons/fa";

export default function HeroSection() {
  const handleGetStart = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Unleash Your Inner Writer
          </h1>
          <p className="text-lg text-gray-600">
            Start writing, sharing, and building your audience today.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleGetStart}
              className="btn btn-primary text-white px-6 py-3 rounded-lg"
            >
              Get Started
            </button>
            <button
              onClick={handleGetStart}
              className="btn btn-outline px-6 py-3 rounded-lg"
            >
              Browse Blogs
            </button>
          </div>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="flex justify-center">
          <div className="w-full h-120 bg-linear-to-tr from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center shadow-md">
            <span className="text-purple-500 text-xl font-semibold">
              <div className="flex items-center justify-center gap-6 text-purple-600">
                <FaPenFancy className="text-4xl" />
                <FaLaptopCode className="text-4xl" />
                <FaFileAlt className="text-4xl" />
                <FaLightbulb className="text-4xl" />
                <FaShieldAlt className="text-4xl" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
