import Link from "next/link";

export default async function Page() {
  {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 120 },
    });

    const posts = await response.json();

    const postsJsx = posts.map((post: any) => (
      <Link
        href={`/posts/${post.id}`}
        key={post.id}
        className="bg-white shadow-md rounded-2xl mb-4 p-4 w-full md:w-[70%] transition hover:shadow-lg"
      >
        <div key={post.id}>
          <h2 className="text-lg font-semibold text-blue-700 mb-2 capitalize">
            {post.title}
          </h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      </Link>
    ));

    return (
      <main className="flex flex-col items-center justify-center min-h-screen  p-6">
        <h1 className="text-3xl font-bold text-white mb-6">Posts Page</h1>
        <div className="flex flex-col items-center w-full">{postsJsx}</div>
      </main>
    );
  }
}
