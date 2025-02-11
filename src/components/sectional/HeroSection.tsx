// import React from "react";

// function HeroSection() {
//   return (
//     <section className="relative flex flex-col items-center justify-center text-center px-4 h-[48vh] md:h-[75vh] bg-index">
//       <h1 className="text-2xl md:text-6xl font-bold">
//         Your Fitness &<br /> Self-Organization Hub
//       </h1>
//       <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
//         Organize your life, track your health, and stay motivated.
//       </p>
//     </section>
//   );
// }

// export default HeroSection;
"use client";
import React from "react";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-center text-left px-8 h-[48vh] md:h-[75vh] bg-index">
      {/* Main Animated Words */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl md:text-6xl font-bold animate-word1">Eat.</h1>
        <h1 className="text-3xl md:text-6xl font-bold animate-word2">Sleep.</h1>
        <h1 className="text-3xl md:text-6xl font-bold animate-word3">
          Develop.
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold animate-word4">
          Repeat.
        </h1>
      </div>

      {/* Extra Animated Text (Appears after the main words) */}
      <p className="mt-8 text-xl md:text-3xl text-white/80 opacity-0 animate-text">
        Build your future, stay consistent, and level up your skills.
      </p>
    </section>
  );
}

export default HeroSection;
