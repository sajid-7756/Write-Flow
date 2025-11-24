"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function AddBlogForm({ user }) {
  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    };

    const res = await fetch(`http://localhost:4000/blogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    const postData = await res.json();
    console.log(postData);

    toast.success("Blog added successfully!");
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto rounded-xl shadow-md p-10  bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Add New Blog</h1>

        {/* Blog Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              placeholder="Enter blog title"
              className="input input-bordered w-full"
            />
            {errors.title && (
              <p className=" text-red-500 text-sm mt-2">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Short description */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Short Description
              </span>
            </label>
            <textarea
              {...register("shortDescription", {
                required: "Short Description is required",
              })}
              placeholder="Short summary of your blog..."
              className="textarea textarea-bordered w-full h-24"
            ></textarea>
            {errors.shortDescription && (
              <p className=" text-red-500 text-sm mt-2">
                {errors.shortDescription.message}
              </p>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Short summary of your blog..."
              className="textarea textarea-bordered w-full h-24"
            ></textarea>
            {errors.excerpt && (
              <p className=" text-red-500 text-sm mt-2">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              {...register("category", {
                required: "Please select a category",
              })}
              className="select select-bordered w-full"
            >
              <option value={""}>Select category</option>
              <option value={"programing"}>Programming</option>
              <option value={"design"}>Design</option>
              <option value={"technology"}>Technology</option>
              <option value={"lifestyle"}>Lifestyle</option>
            </select>
            {errors.category && (
              <p className=" text-red-500 text-sm mt-2">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>
            <input
              {...register("image", { required: "Image URL is required" })}
              type="text"
              placeholder="Paste image link"
              className="input input-bordered w-full"
            />
            {errors.image && (
              <p className=" text-red-500 text-sm mt-2">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Author</span>
            </label>
            <input
              defaultValue={user?.name}
              type="text"
              placeholder="Author name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Read Time */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Read Time</span>
            </label>
            <input
              {...register("readTime", { required: "Read time is required" })}
              type="text"
              placeholder="e.g. 5 min"
              className="input input-bordered w-full"
            />
            {errors.readTime && (
              <p className=" text-red-500 text-sm mt-2">
                {errors.readTime.message}
              </p>
            )}
          </div>

          {/* Publish Date */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Publish Date</span>
            </label>
            <input
              readOnly
              value={new Date().toLocaleDateString()}
              type="text"
              className="input input-bordered w-full"
              //   value={publishDate}
              //   onChange={(e) => setPublishDate(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-fit">
            Add Blog
          </button>
        </form>
      </div>
    </section>
  );
}
