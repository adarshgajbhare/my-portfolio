"use client";

import { blogsItems } from "@/lib/blogsItems";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import chevronLeftIcon from "@/images/chevron-left.svg";
import Image from "next/image";
import FadeInFromBottomHOC from "@/components/FadeInFromBottomHOC";

const Page = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();

  const allowedSlugs = blogsItems.map((blog) => blog.link);
  if (!allowedSlugs.includes(params.slug)) {
    if (typeof window !== "undefined") {
      router.push("/404");
    }
    return null;
  }

  const blog = blogsItems.find((blog) => blog.link === params.slug);

  if (!blog) return;

  return (
    <>
      <div className="mb-4 group">
        <Link className="text-xs flex items-center" href="/blogs">
          <Image
            alt="chevron-back"
            width={10}
            height={10}
            className="group-hover:-translate-x-1 transition-all ease-linear duration-300"
            src={chevronLeftIcon}
          />
          BACK
        </Link>
      </div>
      <FadeInFromBottomHOC>
        <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
          {blog.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {blog.publishDate}
          </p>
        </div>
        <article className="prose prose-quoteless prose-gray max-w-3xl">
          {blog.blogContent}
        </article>
      </FadeInFromBottomHOC>
    </>
  );
};

export default Page;
