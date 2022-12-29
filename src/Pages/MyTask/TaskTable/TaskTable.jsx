import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const TaskTable = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTask] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-tasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTask(data);
      })
      .catch((err) => {
        toast(err.message);
      });
  }, [user?.email]);

  const handleTaskComplete = (id) => {
    fetch(`http://localhost:5000/make-complete/${id}`, {
      method: "Patch",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Task Completed");
        }
      });
  };

  const handleEditTask = (id) => {
    fetch(`http://localhost:5000/edit-task/${id}`, {
      method: "Patch",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Task Edited");
        }
      });
  };

  return (
    <div>
      <div class="overflow-x-auto relative shadow-2xl sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                Task Name
              </th>
              <th scope="col" class="py-3 px-6">
                Priority
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src={task.img}
                    alt="ss"
                    className="w-10 h-10 rounded-full"
                  />

                  <div class="pl-3">
                    <div class="text-base font-semibold">{task.name}</div>
                    <div class="font-normal text-gray-500">
                      {task.postedTime}
                    </div>
                  </div>
                </th>
                <td class="py-4 px-6">High Priority</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    {task.status === "completed" ? (
                      <span class="text-green dark:text-green-400">
                        Completed
                      </span>
                    ) : (
                      <span
                        onClick={() => handleTaskComplete(task._id)}
                        class="text-green dark:text-green-400 cursor-pointer"
                      >
                        Incomplete
                      </span>
                    )}
                  </div>
                </td>
                <td class="py-4 px-6">
                  <Link
                    to="/edit-task"
                    onClick={() => handleEditTask(task._id)}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit Task
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
