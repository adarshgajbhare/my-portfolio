"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type ProjectCardPropsType = {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = (props: ProjectCardPropsType) => {
  const { icon, title, description, link } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
      className="hover:bg-[#101010] p-4 rounded-md max-md:p-0 max-md:hover:bg-white"
    >
      <Link href={link} className="flex flex-col" target="_blank" referrerPolicy="no-referrer">
        <Image
          src={icon}
          alt={title}
          width={30}
          height={30}
          className="rounded-lg mb-3"
        />
        <div className="text-sm mb-1 font-medium text-gray-50">{title}</div>
        <div className="max-w-xs text-sm font-normal text-gray-500">
          {description}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
