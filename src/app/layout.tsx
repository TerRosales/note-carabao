import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Note Carabao",
  description: "Needs new description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Logo */}
        <div className="fixed top-4 right-4 md:left-4 md:right-auto z-[1000] md:mt-6 md:ml-6">
          <Image
            src="/note-carabao-logo.jpg"
            alt="Note Carabao Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="w-20 h-auto md:w-24 transition-all duration-300 rounded-2xl"
            priority
          />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
