"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function BlogTable({ blogs: initalBlogs }) {
  const [blogs, setBlogs] = useState(initalBlogs);

  const handleDelete = async (id) => {
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
    <tbody>
      {blogs.map((blog, index) => (
        <tr key={blog._id} className="hover:bg-indigo-50 transition">
          <td>{index + 1}</td>
          <td className="font-semibold">{blog.title}</td>
          <td>
            <span className="badge badge-outline badge-primary">
              {blog.category}
            </span>
          </td>
          <td>
            <div className="flex gap-2 justify-center">
              <Link
                href={`/blogs/${blog._id}`}
                className="btn btn-sm btn-outline btn-primary"
              >
                View
              </Link>

              <button
                onClick={() => handleDelete(blog._id)}
                className="btn btn-sm btn-outline btn-error"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
