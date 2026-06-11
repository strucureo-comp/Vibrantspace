import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "DUCHATEAU® | Hardwood Flooring, Wall Coverings & Luxury Interiors",
  description: "Duchateau designs and manufactures fine hardwood flooring, luxury wall coverings, custom closets, and high-end cabinetry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ptq1wac.css" />
        <link rel="stylesheet" href="https://use.typekit.net/dkn8tpy.css" />
      </head>
      <body className="antialiased font-sans bg-white text-black">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

