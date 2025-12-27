"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineEye, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

export default function BlogTable({ blogs: initialBlogs }) {
  const [blogs, setBlogs] = useState(initialBlogs);

  const handleDelete = async (id) => {
    // Basic confirmation for now, could be improved with SweetAlert2 as seen in history
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const res = await fetch(`https://writeflow-server.vercel.app/blogs/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledged) {
      toast.success("Deleted blog successfully");
      setBlogs((prev) => prev.filter((p) => p._id !== id));
    }
  };

  return (
    <tbody className="divide-y divide-gray-100">
      <AnimatePresence mode="popLayout">
        {blogs.length === 0 ? (
          <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white"
          >
            <td colSpan="4" className="py-20 text-center">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-gray-900">
                  No blogs yet
                </h3>
                <p className="text-gray-500">
                  Time to share your first story with the world!
                </p>
                <Link
                  href="/add-blogs"
                  className="btn btn-primary mt-6 rounded-2xl px-8"
                >
                  Create Blog
                </Link>
              </div>
            </td>
          </motion.tr>
        ) : (
          blogs.map((blog, index) => (
            <motion.tr
              key={blog._id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group hover:bg-gray-50/50 transition-colors"
            >
              <td className="py-6 px-8 flex items-center gap-3">
                <span className="text-xs font-black text-gray-300 group-hover:text-purple-400 transition-colors">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </td>
              <td className="py-6 px-8">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                    {blog.title}
                  </span>
                  <span className="text-xs text-gray-400 line-clamp-1 max-w-sm mt-1">
                    {blog.description}
                  </span>
                </div>
              </td>
              <td className="py-6 px-8">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                  {blog.category}
                </span>
              </td>
              <td className="py-6 px-8">
                <div className="flex gap-3 justify-end">
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="p-2 hover:bg-white hover:text-blue-600 text-gray-400 rounded-xl transition-all shadow-sm border border-transparent hover:border-blue-100"
                    title="View Details"
                  >
                    <HiOutlineEye size={20} />
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="p-2 hover:bg-white hover:text-red-600 text-gray-400 rounded-xl transition-all shadow-sm border border-transparent hover:border-red-100"
                    title="Delete Blog"
                  >
                    <HiOutlineTrash size={20} />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))
        )}
      </AnimatePresence>
    </tbody>
  );
}
