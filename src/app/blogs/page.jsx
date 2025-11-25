import BlogGrid from "@/components/BlogGrid";
import getAllBlogs from "@/lib/getAllBlogs";
import React from "react";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return <BlogGrid blogs={blogs} />;
}
