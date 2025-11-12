export default async function PageDetails({ postId }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 120 },
    }
  );
  const post = await response.json();
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold text-blue-50 mb-4">Post Details</h1>

      <div className="bg-white shadow-md rounded-2xl p-6 w-full md:w-[70%]">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {post.title}
        </h2>
        <p className="text-gray-700">{post.body}</p>
      </div>
    </main>
  );
}
