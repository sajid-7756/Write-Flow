'use server'
import { revalidatePath } from "next/cache";

export async function postComment(newComment) {
  const res = await fetch(`http://localhost:4000/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  });
  const data = await res.json();
  
  if (res.ok) {
    revalidatePath(`/blogs/${newComment.blogId}`);
  }
  
  return {
    ok: res.ok,
    status: res.status,
    data: data
  };
}
