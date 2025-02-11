import React from "react";
import "@/styles/pages/homepage.css";
import BlogSection from "./blogSection";

type Props = {};

const IndexPage = (props: Props) => {
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
      <section className="relative flex flex-col items-center justify-center text-center px-4 h-[90vh] bg-index">
        <h1 className="text-2xl md:text-6xl font-bold">
          Your Fitness &<br /> Self-Organization Hub
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Organize your life, track your health, and stay motivated.
        </p>
      </section>

      {/* Fitness Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Track Your Progress
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Stay on top of your fitness, career, and learning journey.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {[
              {
                title: "Fitness Routine",
                message: "Stay consistent with personalized fitness plans.",
              },
              {
                title: "Professional Development",
                message: "Update and Expand on your portfolio",
              },
              {
                title: "Learning Track",
                message: "Expand your knowledge through insightful blogs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group w-full h-52 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
              >
                {/* Default Card Content */}
                <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                  {item.title}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection/>

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
