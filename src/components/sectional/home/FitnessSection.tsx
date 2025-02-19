import React from "react";

function FitnessSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Track Your Progress</h2>
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
              className="relative group w-full h-20 md:h-52 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
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
  );
}

export default FitnessSection;
