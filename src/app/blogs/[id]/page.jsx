import BlogDetailImage from "@/components/BlogDetailImage";
import BackButton from "@/components/Button";
import getBlog from "@/lib/getBlog";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);

  if(!blog._id) {
    notFound()
  }

  return (
    <div>
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-9  text-center">
          Blog Details
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 p-10 rounded-md">
          {/* Left Side: Blog Image */}
          <div className="w-full">
            {/* <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={600}
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            /> */}
            <BlogDetailImage blog={blog}></BlogDetailImage>
          </div>

          {/* Right Side: Blog Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
            <p className="text-gray-600 text-lg">{blog.description}</p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <Image
                src={blog.authorAvatar}
                alt={blog.author}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{blog.author}</h3>
                <p className="text-sm text-gray-500">{blog.category}</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex gap-6 items-center text-sm text-gray-500">
              <span>{blog.readTime} read</span>
              <span>Date: {blog.publishedAt}</span>
              <BackButton>Back</BackButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
