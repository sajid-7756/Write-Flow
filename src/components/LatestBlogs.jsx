import getLatestBlogs from "@/lib/getLatestBlogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function LatestBlogs() {
  const latestBlogs = await getLatestBlogs();
  console.log(latestBlogs);
  return (
    <div>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-9  text-center">
            Latest Blogs
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover fresh insights, tutorials, and stories from writers around
            the globe. Stay inspired with practical tips, creative ideas, and
            the latest trends in blogging and digital storytelling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.slice(0, 6).map((blog) => (
              <div
                key={blog._id}
                className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col"
              >
                {/* Blog Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image || "/fallback.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
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
                        {blog.category} • {blog.readTime} •{" "}
                        Date: {blog.publishedAt}
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
    </div>
  );
}
