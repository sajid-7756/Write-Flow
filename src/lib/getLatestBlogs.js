export default async function getLatestBlogs() {
  const res = await fetch(`${process.env.SERVER_URL}/latest-blogs`);
  return res.json();
}
