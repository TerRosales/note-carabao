import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Healthy Recipes",
    body: "A quick and effective workout that fits into your busy schedule. Improve your health with just a few simple exercises each day.",
    image: "/blog-logo.jpg",
  },
  {
    id: 2,
    title: "Progression Dashboard Breakdown",
    body: "Stay productive effortlessly with these simple strategies to manage your time, reduce stress, and maximize efficiency throughout the week.",
    image: "/dashboard-logo.jpg",
  },
  {
    id: 3,
    title: "Workout Log",
    body: "Discover budget-friendly tips to eat healthy without breaking the bank. Meal planning and smart grocery shopping made easy.",
    image: "/fitness-logo.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Latest Blog Posts
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Tips and strategies for a better you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="w-full h-[250px] md:h-[300px] lg:h-[350px] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {post.body.length > 80
                    ? `${post.body.substring(0, 80)}...`
                    : post.body}
                </p>
                <button className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition">
            See More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
