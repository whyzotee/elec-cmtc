"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { basePath } from "@/lib/setting";
import { useRouter, useSearchParams } from "next/navigation";

const getBlogData = async () => {
  const res = await fetch(`${basePath}/api/get-blog-data.php`);
  const data = await res.json();
  return data;
};

const getBlogDetails = async (id: string) => {
  const res = await fetch(`${basePath}/api/get-blog-details.php?id=${id}`);
  const data = await res.json();
  return data;
};

export default function BlogPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(0);
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    setIsLoading(0);
    if (params.get("id") != null) {
      getBlogDetails(params.get("id")!).then((res) => {
        setBlogData(res);
        setIsLoading(2);
      });
    } else {
      getBlogData().then((res) => {
        setBlogData(res);
        setIsLoading(1);
      });
    }
  }, [params, router]);

  if (blogData == null) {
    return (
      <main className="h-screen w-full flex items-center justify-center">
        <h1>Error: can&apos;t fetch data from backend</h1>
      </main>
    );
  }

  if (isLoading == 1) {
    return (
      <main className="max-w-7xl m-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((element: BlogType) => (
          <div key={element.id}>
            <div className="shadow-xl rounded-xl bg-white hover:scale-105 transition-all">
              <div className="relative h-56">
                <Image
                  className="absolute object-cover rounded-t-xl"
                  src={element.img_path}
                  alt={element.img_path}
                  fill
                />
                <span className="absolute right-0 bg-white p-1 rounded-md m-2">
                  {new Date(element.date).toLocaleDateString("th-TH")}
                </span>
              </div>
              <div className=" flex flex-col text-[#303030] p-4">
                <h1 className="line-clamp-1 text-xl font-semibold">
                  {element.topic}
                </h1>

                <p className="h-[4.5rem] w-full line-clamp-3 my-4">
                  {element.description}
                </p>
                <button
                  onClick={() => router.push("/blog/?id=" + element.id)}
                  className="text-center text-blue-500 border-2 border-blue-500 px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
                >
                  อ่านต่อ
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    );
  }

  if (isLoading == 2) {
    return (
      <main className="max-w-7xl lg:h-[90vh] m-auto flex flex-col lg:flex-row p-6 md:p-12 text-[#303030]">
        <div className="w-full lg:w-1/2">
          <div className="relative h-96 lg:h-full w-full">
            <Image
              src={blogData.img_path}
              alt="blog_img"
              className=" rounded-lg object-cover object-center"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-1/2 lg:h-full lg:w-1/2 py-4 lg:px-4">
          <div className="flex flex-col">
            <span className="text-gray-500">
              /<button onClick={() => router.push("/blog/")}>blog</button>/
              {blogData.id}
            </span>
            <span className="text-xl mt-4">{blogData.topic}</span>
            <span className="h-auto text-gray-600 mt-4">
              {blogData.description}
            </span>
          </div>
          <span className="mt-4">
            โพสต์เมื่อ{" "}
            {new Date(blogData.date).toLocaleDateString("th-TH", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <h1>Loading</h1>
    </main>
  );
}
