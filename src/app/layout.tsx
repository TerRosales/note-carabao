import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navigation/Navbar";

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
        <Navbar/>
        <main>
        {children}

        </main>
      </body>
    </html>
  );
}
