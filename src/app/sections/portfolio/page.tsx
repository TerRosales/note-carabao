// Boilerplate
// "use client";

// import { motion } from "framer-motion";

// const Portfolio = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden bg-gray-900">
//         {/* Left Side - Image */}
//         <motion.div
//           initial={{ x: "-100%", skewX: 0, opacity: 0 }}
//           animate={{ x: 0, skewX: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="relative w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center transform md:skew-x-[-20]"
//           style={{ backgroundImage: "url('/filler.jpg')" }}
//         />

//         {/* Right Side - Text */}
//         <motion.div
//           initial={{ x: "100%", opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
//           className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-white p-10"
//         >
//           <div className="max-w-lg text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">
//               Your Title Here
//             </h1>
//             <p className="text-base md:text-lg text-gray-300">
//               This is a sample description for your text section. It appears
//               with an animation when the page loads.
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* Additional Sections */}
//       <section className="w-full h-screen bg-slate-600 flex items-center justify-center text-white">
//         Section 2
//       </section>
//       <section className="w-full h-screen bg-slate-800 flex items-center justify-center text-white">
//         Section 3
//       </section>
//     </div>
//   );
// };

// export default Portfolio;


"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        controls.start({ opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden bg-gray-900">
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: "-100%", skewX: 0, opacity: 0 }}
          animate={{ x: 0, skewX: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center transform md:skew-x-[-20]"
          style={{ backgroundImage: "url('/filler.jpg')" }}
        />

        {/* Right Side - Text */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-white p-10"
        >
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your Title Here
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              This is a sample description for your text section. It appears
              with an animation when the page loads.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Scroll Triggered Sections */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-screen bg-slate-600 flex items-center justify-center text-white"
      >
        Section 2
      </motion.section>
    </div>
  );
};

export default Portfolio;

