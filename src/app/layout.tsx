import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navigation/Navbar";
import Logo from "@/components/utility/Logo";

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
        <Logo />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
