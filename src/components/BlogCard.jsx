"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogImage from "./BlogImage";

export default function BlogCard({ blog, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group"
    >
      {/* Blog Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <BlogImage blog={blog} />
        </motion.div>
        
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/90 backdrop-blur-md text-purple-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {blog.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
          <div className="relative w-10 h-10">
            <Image
              src={blog.authorAvatar}
              alt={blog.author}
              fill
              className="rounded-full object-cover border-2 border-purple-50"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm truncate">{blog.author}</p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
               <span>{blog.publishedAt}</span>
               <span>•</span>
               <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Details Button */}
        <div className="mt-6">
          <Link href={`/blogs/${blog._id}`}>
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gray-50 hover:bg-purple-600 hover:text-white text-gray-600 font-bold rounded-xl transition-all duration-300 text-sm"
            >
              Read Article
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
