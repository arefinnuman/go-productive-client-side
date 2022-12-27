import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { FaTasks } from "react-icons/fa";

const TaskForm = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1 className="text-3xl font-bold ">Add Your Task</h1>
      <form action="">
        {/* Task Post */}
        <label
          htmlFor="website-admin"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
        ></label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <FaTasks />
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Task"
          />
        </div>

        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
          htmlFor="user_avatar"
        >
          Upload Photos
        </label>
        <input
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
        <div
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        >
          Picture must be matched with your Task.
        </div>

        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
          htmlFor="user_avatar"
        >
          Select Date & Time
        </label>

        <div>
          <DateTimePicker onChange={onChange} value={value} />
        </div>

        <div
          className="mt-1 mb-5 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        >
          Select your date and time carefully.
        </div>

        <input
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          value="submit"
        />
      </form>
    </div>
  );
};

export default TaskForm;
