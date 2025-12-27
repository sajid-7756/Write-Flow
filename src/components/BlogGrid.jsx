"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogGrid({ blogs }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">All Blogs ({blogs.length})</h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Explore insights, tutorials, and stories from writers around the globe.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 mb-16 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm"
        >
          <div className="relative flex-1 group">
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by title..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="relative md:w-1/4">
            <select
              className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-700 appearance-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                 <BlogCard blog={blog} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBlogs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No blogs found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

