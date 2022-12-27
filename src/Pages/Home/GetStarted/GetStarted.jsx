import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="dark:text-violet-400">laborum doloribus</span>
            delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link>
              <Button className="mr-3" gradientDuoTone="cyanToBlue">
                Get Started
              </Button>
            </Link>
            <Link>
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
