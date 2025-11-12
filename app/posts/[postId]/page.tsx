import PageDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PageDetail({ params }) {
  const { postId } = await params;

  const loadings = (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <svg
        className="animate-spin h-12 w-12 text-blue-50 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
      <h1 className="text-lg font-semibold text-blue-50">
        Loading post details...
      </h1>
    </div>
  );
  return (
    <>
      <Suspense fallback={loadings}>
        <PageDetails postId={postId} />
      </Suspense>
    </>
  );
}
