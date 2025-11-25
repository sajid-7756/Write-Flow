"use client";
import { default as Image } from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlogImage from "./BlogImage";

export default function BlogGrid({ blogs }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filter blogs by search + category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">All Blogs</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore insights, tutorials, and stories from writers around the
          globe.
        </p>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search blogs..."
            className="input input-bordered w-full md:w-1/2 bg-pink-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="select select-bordered w-full md:w-1/4 bg-pink-100"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className=" bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <BlogImage blog={blog}></BlogImage>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.shortDescription}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <Image
                    src={blog.authorAvatar}
                    alt={blog.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-700">{blog.author}</p>
                    <p>
                      {blog.category} • {blog.readTime} • Date:{" "}
                      {blog.publishedAt}
                    </p>
                  </div>
                </div>

                {/* Details Button */}
                <div className="mt-auto">
                  <Link href={`/blogs/${blog._id}`}>
                    <button className="btn btn-primary w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
