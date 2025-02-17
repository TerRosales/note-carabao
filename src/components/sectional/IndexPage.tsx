import React from "react";
import "@/styles/pages/homepage.css";
import BlogSection from "./BloggingSection";
import FitnessSection from "./FitnessSection";
import HeroSection from "./HeroSection";

const IndexPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Fitness Section */}
      <FitnessSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Portfolio CTA Section */}

      <div className="relative">
        <div className="custom-shape-divider-top-1739630697">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <section className="py-[12%] dark:bg-black/60 text-white/80 text-center pt-20">
          <h2 className="text-2xl mt-16 pt-10 md:text-6xl font-bold">
            See What I Built
          </h2>
          <p className="mt-2 text-lg">Check out my latest work.</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 transition rounded-md">
            View Sample App
          </button>
        </section>
      </div>
    </div>
  );
};

export default IndexPage;
