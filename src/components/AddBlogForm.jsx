"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function AddBlogForm({ user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const { title, description, shortDescription, category, image, readTime } =
      data;

    const newBlog = {
      title,
      description,
      shortDescription,
      category,
      image,
      readTime,
      publishedAt: new Date().toLocaleDateString(),
      author: user?.name,
      authorAvatar: user?.image,
      authorEmail: user?.email,
    };

    const res = await fetch(`https://writeflow-server.vercel.app/blogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    const postData = await res.json();

    toast.success("Blog added successfully!");
    reset()
  };

  return (
    <section className="py-24 px-6 bg-gray-50/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-purple-900/5 p-10 md:p-16 border border-gray-100">
          <div className="mb-12">
            <h2 className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-4">
              Write Something Great
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Create New Blog
            </h1>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Title</label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter a catchy blog title"
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 placeholder:text-gray-400"
              />
              {errors.title && (
                <p className="text-red-500 text-xs font-bold mt-2 ml-1 uppercase tracking-wider">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Category</label>
              <select
                {...register("category", { required: "Please select a category" })}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 appearance-none cursor-pointer"
              >
                <option value={""}>Select category</option>
                <option value={"programming"}>Programming</option>
                <option value={"design"}>Design</option>
                <option value={"technology"}>Technology</option>
                <option value={"lifestyle"}>Lifestyle</option>
              </select>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Read Time</label>
              <input
                {...register("readTime", { required: "Read time is required" })}
                type="text"
                placeholder="e.g. 5 min read"
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Cover Image URL</label>
              <input
                {...register("image", { required: "Image URL is required" })}
                type="text"
                placeholder="Paste the link to your cover image"
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Short description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Short Summary</label>
              <textarea
                {...register("shortDescription", { required: "Short Description is required" })}
                placeholder="A brief summary that hooks the reader..."
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 h-32 resize-none placeholder:text-gray-400"
              ></textarea>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Full Content</label>
              <textarea
                {...register("description", { required: "Description is required" })}
                placeholder="Start writing your masterpiece here..."
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 h-64 resize-none placeholder:text-gray-400"
              ></textarea>
            </div>

            {/* Author Meta Info (Read Only) */}
            <div className="md:col-span-2 grid grid-cols-2 gap-6 bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-1">Authoring as</p>
                  <p className="font-bold text-gray-900">{user?.name}</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-1">Publish Date</p>
                  <p className="font-bold text-gray-900">{new Date().toLocaleDateString()}</p>
               </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-5 bg-purple-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-purple-900/20 hover:bg-purple-700 transition-all"
              >
                Publish Article
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

