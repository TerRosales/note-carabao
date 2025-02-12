import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="fixed top-4 right-4 z-[1000] md:mt-6 md:ml-6">
      <Link href="/">
        <Image
          src="/note-carabao-logo.jpg"
          alt="Note Carabao Logo"
          width={100} // Adjust width as needed
          height={100} // Adjust height as needed
          className="w-20 h-auto md:w-24 transition-all duration-300 rounded-2xl"
          priority
        />
      </Link>
    </div>
  );
}

export default Logo;
