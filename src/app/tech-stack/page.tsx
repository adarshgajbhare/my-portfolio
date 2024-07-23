import FadeInFromBottomHOC from "@/components/FadeInFromBottomHOC";
import TechStackList from "@/components/TechStackList";
import React from "react";

const Page = () => {
  return (
    <>
      <FadeInFromBottomHOC>
        <TechStackList
          title="Front-End Technologies"
          items={["React.js", "Redux", "JavaScript", "HTML/CSS"]}
        />
        <TechStackList
          title="Back-End Technologies"
          items={[
            "Java",
            "Spring-boot",
            "Microservices",
            "MongoDB",
            "SQL",

            "Oracle",
          ]}
        />
        <TechStackList
          title="Technologies & Tools"
          items={["Git", "Firebase"]}
        />
        <TechStackList
          title="Learning New Skills"
          items={["Next.js", "TypeScript", "Node js"]}
        />
      </FadeInFromBottomHOC>
    </>
  );
};

export default Page;
