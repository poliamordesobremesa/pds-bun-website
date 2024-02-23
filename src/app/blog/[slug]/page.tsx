export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export default function Page({ params }: { params: { slug: string } }) {
  return <h1>My Page</h1>;
}