import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-[68px] ml-4 mr-4 h-42">
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Unlock Premium
          </h5>
        </a>
        <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
        Subscribe to unlock new features and if eligible, receive a share of ads revenue.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-full hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
