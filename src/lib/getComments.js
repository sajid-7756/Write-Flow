export async function getComments(blogId) {
  const res = await fetch(`http://localhost:4000/comments/${blogId}`);
  return res.json();
}
