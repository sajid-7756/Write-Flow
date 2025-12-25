import getLatestBlogs from "@/lib/getLatestBlogs";
import React from "react";
import BlogCard from "./BlogCard";

export default async function LatestBlogs() {
  const latestBlogs = await getLatestBlogs();

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-4">
            Fresh Content
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Latest Stories
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Stay updated with the latest trends and stories from our passionate community of writers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestBlogs.slice(0, 6).map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

