"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInFromBottomHOCProps {
  children: ReactNode;
}

const FadeInFromBottomHOC: React.FC<FadeInFromBottomHOCProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromBottomHOC;
