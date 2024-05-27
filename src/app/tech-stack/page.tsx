import FadeInFromBottomHOC from "@/components/FadeInFromBottomHOC";
import TechStackList from "@/components/TechStackList";
import React from "react";

const Page = () => {
  return (
    <>
      <FadeInFromBottomHOC>
        <TechStackList
          title="Front-End Technologies"
          items={[
            "Next.js",
            "React.js",
            "React Native",
            "Redux",
            "JavaScript",
            "TypeScript",
            "HTML/CSS",
          ]}
        />
        <TechStackList
          title="Back-End Technologies"
          items={[
            "Node.js",
            "Express.js",
            "MongoDB",
            "SQL",
            "REST API",
            "GraphQL",
          ]}
        />
        <TechStackList
          title="Technologies & Tools"
          items={[
            "AWS",
            "Docker",
            "Git",
            "Firebase",
            "Supabase",
            "Elastic Search",
            "Postman",
          ]}
        />
        <TechStackList
          title="Additional Skills"
          items={[
            "DSA",
            "System Design",
            "Testing (Jest, Enzyme)",
            "Agile methodologies",
          ]}
        />
      </FadeInFromBottomHOC>
    </>
  );
};

export default Page;
