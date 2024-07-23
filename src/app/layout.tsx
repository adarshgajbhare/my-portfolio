import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adarsh Gajbhare | Portfolio",
  description: "Full Stack Software Engineer specializing in React.js and Java. Experienced in creating scalable web applications and optimizing performance. Passionate about leveraging cutting-edge technologies to deliver efficient, user-centric digital solutions. Seeking new opportunities to drive innovation and business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[52rem] p-8 mx-auto bg-black`} >
        <Header />
        <div className="border-b w-full my-8" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
