import { Spinner } from "flowbite-react";
import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-start">
      <Spinner aria-label="Default status example" />
    </div>
  );
};

export default Loader;
