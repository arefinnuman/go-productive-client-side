import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Organize your life and
            <span className="dark:text-violet-400">
              manage your team’s work with Any.do
            </span>
            delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Over 30 million people organize their tasks, lists and manage their
            team’s projects with Any.do
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="add-task">
              <Button className="mr-3" gradientDuoTone="cyanToBlue">
                Get Started
              </Button>
            </Link>
            <Link to="blog">
              <Button className="" outline={true} gradientDuoTone="cyanToBlue">
                Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
