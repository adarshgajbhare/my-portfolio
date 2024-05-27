import FadeInFromBottomHOC from "@/components/FadeInFromBottomHOC";
import Link from "next/link";
import React from "react";

const Resume: React.FC = () => {
  return (
    <FadeInFromBottomHOC>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="max-w-screen-md w-full mx-auto mb-8">
          <div className="hidden md:block">
            <embed
              src="/AshutoshMathoreResume.pdf"
              type="application/pdf"
              className="w-full min-h-[800px]"
            />
          </div>
          <div className="block md:hidden w-full mx-auto my-8 flex justify-center">
            <Link
              href="/AshutoshMathoreResume.pdf"
              download
              className="bg-gray-900 rounded-md text-white px-4 py-2"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </FadeInFromBottomHOC>
  );
};

export default Resume;
