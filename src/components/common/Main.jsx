import React from 'react';

const Main = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Turn Ideas Into Action with <span className="text-red-500">MindNest</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          A collaborative mind mapping tool to visualize your thoughts, brainstorm with your team, and build strategies — all in real time.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Main;
