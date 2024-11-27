import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adarsh Gajbhare | Portfolio",
  description: "I develop scalable backend systems with Java Spring Boot, adding front-end support with React when needed. I'm seeking a role where I can enhance products and help businesses grow.",
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
