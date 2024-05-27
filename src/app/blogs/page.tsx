import FadeInFromBottomHOC from "@/components/FadeInFromBottomHOC";
import { blogsItems } from "@/lib/blogsItems";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-[400px] max-md:min-h-[200px]">
      <FadeInFromBottomHOC>
        {blogsItems.reverse().map((blog) => (
          <Link
            className="flex flex-col space-y-1 mb-8 hover:bg-[#101010] hover:px-2 hover:py-1 transition-all ease-in-out duration-200 rounded-lg"
            href={`/blogs/${blog.link}`}
            key={blog.id}
          >
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-gray-200 text-xs">{blog.publishDate}</p>
                <h1 className="text-gray-50 font-medium text-lg tracking-tight">
                  {blog.title}
                </h1>
              </div>
              <p className="text-gray-200 text-sm tracking-tight mt-1 text-ellipsis overflow-hidden whitespace-nowrap">
                {blog.description}
              </p>
            </div>
          </Link>
        ))}
      </FadeInFromBottomHOC>
    </div>
  );
};

export default Page;
