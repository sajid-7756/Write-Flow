export default async function getAllBlogs() {
  const res = await fetch(`${process.env.SERVER_URL}/blogs`);
  return res.json();
}
