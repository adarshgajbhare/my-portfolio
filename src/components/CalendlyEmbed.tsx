"use client";

import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) head.appendChild(script);

    const checkIfLoaded = setInterval(() => {
      const widget = document.querySelector(".calendly-inline-widget iframe");
      if (widget) {
        setIsLoading(false);
        clearInterval(checkIfLoaded);
      }
    }, 500);

    return () => {
      clearInterval(checkIfLoaded);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="h-[900px] w-full flex justify-center items-center">
          <Loader className="w-10 h-10" />
        </div>
      )}
      <div
        className="calendly-inline-widget h-[900px] w-full"
        data-url={url}
      ></div>
    </>
  );
};

export default CalendlyEmbed;
