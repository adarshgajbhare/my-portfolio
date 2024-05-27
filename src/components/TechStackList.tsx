import React from "react";

type TechStackListPropsType = {
  title: string;
  items: string[];
};

const TechStackList = (props: TechStackListPropsType) => {
  const { title, items } = props;

  return (
    <div>
      <h1 className="capitalize font-medium text-lg mt-5 text-gray-100">{title}</h1>
      <ul className="list-disc text-gray-400 ml-5 grid grid-cols-2 gap-4 mt-3">
        {items.map((item) => (
          <li className="space-x-1 font-medium text-sm text-gray-50" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStackList;
