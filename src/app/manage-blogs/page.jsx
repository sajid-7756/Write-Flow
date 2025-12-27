import { auth } from "@/auth";
import BlogTable from "@/components/BlogTable";
import getUsersBlog from "@/lib/getUsersBlog";
import React from "react";

export default async function ManageBlogsPage() {
  const { user } = await auth();
  const blogs = await getUsersBlog(user?.email);

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-6">
      <div className="max-w-7xl mx-auto mb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Manage Your Blogs
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              Maintain, edit, and keep track of all your stories in one place.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white px-6 py-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <span className="text-3xl font-bold text-purple-600">{blogs.length}</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Total Posts</span>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-gray-50/80 border-b border-gray-100">
                <tr>
                  <th className="py-6 px-8 text-xs uppercase tracking-widest font-black text-gray-500">ID</th>
                  <th className="py-6 px-8 text-xs uppercase tracking-widest font-black text-gray-500">Blog Content</th>
                  <th className="py-6 px-8 text-xs uppercase tracking-widest font-black text-gray-500">Category</th>
                  <th className="py-6 px-8 text-xs uppercase tracking-widest font-black text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <BlogTable blogs={blogs}></BlogTable>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
