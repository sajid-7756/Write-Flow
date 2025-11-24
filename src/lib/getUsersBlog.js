export default async function getUsersBlog(email) {
  const res = await fetch(`${process.env.SERVER_URL}/blogs?email=${email}`);
  return res.json();
}
