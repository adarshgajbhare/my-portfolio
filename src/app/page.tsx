import FadeInFromBottomHOC from "@/components/FadeInFromBottomHOC";
import ListItem from "@/components/ListItem";
import ProjectCard from "@/components/ProjectCard";
import { blogsItems } from "@/lib/blogsItems";
import { educationItems } from "@/lib/educationItems";
import { experienceItems } from "@/lib/experienceItems";
import { projectItems } from "@/lib/projectsItems";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <FadeInFromBottomHOC>
        <p className="text-gray-200 text-lg">
        I develop scalable backend systems with Java Spring Boot, adding front-end support with React when needed. I&apos;m seeking a role where I can enhance products and help businesses grow.
          </p>
        <div className="mt-16">
          <h1 className="font-medium text-gray-50 mb-4 text-lg">Experience</h1>
          <ol className="relative border-s border-gray-200">
            {experienceItems.map((item) => (
              <ListItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                isCurrent={item.isCurrent}
                link={item.link}
              />
            ))}
          </ol>
        </div>
        <div className="mt-16">
          <h1 className="font-medium text-gray-50 mb-4 text-lg">Projects</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
            {projectItems.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
                link={item.link}
              />
            ))}
          </div>
        </div>
        {/* <div className="mt-16">
          <h1 className="font-medium text-gray-50 mb-4 text-lg">
            Latest Blogs
          </h1>
          {blogsItems
            .reverse()
            .slice(0, 2)
            .map((blog) => (
              <Link
                href={`/blogs/${blog.link}`}
                className="flex items-center gap-2 mb-4 hover:bg-[#101010] p-2 hover:underline"
                key={blog.id}
              >
                <div className="text-gray-200 text-xs">{blog.publishDate}</div>
                <div className="text-gray-50 font-medium tracking-tight">
                  {blog.title}
                </div>
              </Link>
            ))}
        </div> */}
        <div className="mt-16">
          <h1 className="font-medium text-gray-50 mb-4 text-lg">Education</h1>
          <ol className="relative border-s border-gray-200">
            {educationItems.map((item) => (
              <ListItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                isCurrent={item.isCurrent}
                link={item.link}
              />
            ))}
          </ol>
        </div>
      </FadeInFromBottomHOC>
    </main>
  );
}
