import React from "react";
import "@/styles/pages/homepage.css"


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
        <h1 className="text-2xl md:text-6xl font-bold">Your Fitness &<br/> Self-Organization Hub</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Organize your life, track your health, and stay motivated.
        </p>
      </section>

      {/* Fitness Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Fitness Tracking</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Track workouts, set goals, and measure progress.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">Workout Routines</h3>
              <p className="text-gray-600 dark:text-gray-300">Custom plans for every goal.</p>
            </div>
            <div className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">Progress Tracker</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay accountable with logs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Blog Posts</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Tips and strategies for a better you.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="w-80 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">10-Minute Daily Fitness Plan</h3>
              <p className="text-gray-600 dark:text-gray-300">A quick and effective workout.</p>
            </div>
            <div className="w-80 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Organize Your Week in 5 Steps</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay productive effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

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
