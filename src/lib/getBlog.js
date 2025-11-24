export default async function getBlog(blogId) {
  const res = await fetch(`${process.env.SERVER_URL}/blogs/${blogId}`);
  return res.json();
}
