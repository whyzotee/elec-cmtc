import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <h2 className="text-3xl">Not Found 404</h2>
      <p>Could not find page</p>
      <br />
      <Link
        href="/"
        className="text-center text-blue-500 border-2 border-blue-500 px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
