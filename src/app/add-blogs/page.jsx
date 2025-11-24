import { auth } from "@/auth";
import AddBlogForm from "@/components/AddBlogForm";
import React from "react";
import { useForm } from "react-hook-form";

export default async function AddBlogPage() {
  const { user } = await auth();

  return <AddBlogForm user={user}></AddBlogForm>;
}
