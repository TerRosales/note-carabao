import React from "react";
import "@/styles/pages/homepage.css";
import BlogSection from "./BloggingSection";
import FitnessSection from "./FitnessSection";
import HeroSection from "./HeroSection";

const IndexPage = () => {
  return (
    // <div>
    //   <section>
    //     <h1>Index Page</h1>
    //   </section>
    //   <section>
    //     <Link
    //       href="/sections/onboarding/sign-in"
    //       className="hover:text-blue-600"
    //     >
    //       Sign In
    //     </Link>
    //   </section>
    // </div>
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Fitness Section */}
      <FitnessSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Portfolio CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-2xl md:text-6xl font-bold">See What We Built</h2>
        <p className="mt-2 text-lg">Check out our latest work.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 transition rounded-md">
          View Portfolio
        </button>
      </section>
    </div>
  );
};

export default IndexPage;
