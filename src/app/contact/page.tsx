import CalendlyEmbed from "@/components/CalendlyEmbed";
import FadeInFromBottomHOC from "@/components/FadeInFromBottomHOC";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <FadeInFromBottomHOC>
        <p className="text-gray-200 mb-4">
          Let&apos;s work on something together, you can book a meeting below or
          drop a dm on{" "}
          <Link
            href="https://twitter.com/direct_messages/create/AgitatedAg"
            className="underline"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            twitter
          </Link>
        </p>
        <CalendlyEmbed url="https://calendly.com/adarshgajbhare/30min" />
      </FadeInFromBottomHOC>
    </>
  );
};

export default Page;
