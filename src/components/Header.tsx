import Image from "next/image";
import Link from "next/link";
import React from "react";
import AdarshImage from "@/images/profile-pic-bnw.jpg";

import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
const Header = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={AdarshImage}
          alt="adarsh-gajbhare-profile-picture"
          width={50}
          height={50}
          className="rounded-full"
        />
      </Link>
      <h1 className="font-medium text-gray-50 mt-2 text-xl">
        Adarsh Gajbhare
      </h1>
      <p className="text-gray-500 ">Software Engineer</p>
      <div className="flex flex-row justify-between items-center mt-6">
        <div className="flex flex-row items-center gap-x-4">
          <Link
            href="https://www.linkedin.com/in/adarshgajbhare/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            
            <IconBrandLinkedin stroke={2} color="white" size={26}/>
            
          </Link>
          <Link
            href="https://github.com/adarshgajbhare"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <IconBrandGithub stroke={2} color="white" size={26}/>
          </Link>
          <Link
            href="https://x.com/AgitatedAg"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <IconBrandTwitter stroke={2} color="white" size={26}/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
