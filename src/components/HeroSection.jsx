"use client";

import Image from "next/image";

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
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="blog"
            width={1000}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
