import { auth } from "@/auth";
import BlogTable from "@/components/BlogTable";
import getUsersBlog from "@/lib/getUsersBlog";
import React from "react";

export default async function ManageBlogsPage() {
  const { user } = await auth();
  const blogs = await getUsersBlog(user?.email);

  return (
    <>
      <h2 className="text-4xl font-bold text-gray-900 mb-9  text-center mt-5">
        Manage Your Blogs
      </h2>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto p-5">
          <table className="table table-zebra w-full rounded-lg shadow bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100">
            {/* head */}
            <thead className="bg-indigo-200 text-gray-900">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <BlogTable blogs={blogs}></BlogTable>
          </table>
        </div>
      </div>
    </>
  );
}
