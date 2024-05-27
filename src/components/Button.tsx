"use client"

import React, { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  children: ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = ({
  isActive = false,
  children,
  href,
 ...props
}) => {
  return (
    <Link
      href={href}
      passHref
      className={`text-sm transition-colors px-2 py-1 rounded-md relative ${
        isActive? "text-white" : "text-gray-200 hover:text-gray-50"
      }`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gray-900 rounded-md"
        />
      )}
    </Link>
  );
};

export default Button;