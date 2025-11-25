import { notFound } from "next/navigation";

export default async function getBlog(blogId) {
  const res = await fetch(`${process.env.SERVER_URL}/blogs/${blogId}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
