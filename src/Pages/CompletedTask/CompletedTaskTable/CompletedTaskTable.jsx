import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const CompletedTaskTable = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTask] = useState([]);

  useEffect(() => {
    fetch(
      `https://go-productive-server-side.vercel.app/completed-tasks/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyTask(data);
      })
      .catch((err) => {
        toast(err.message);
      });
  }, [user?.email, myTasks]);

  // Task to pending Mode
  const handleTaskPending = (id) => {
    fetch(`https://go-productive-server-side.vercel.app/make-pending/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("It will go to your pending task list");
        }
      });
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    fetch(`https://go-productive-server-side.vercel.app/delete-task/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Task Deleted");
        }
      });
  };

  return (
    <div className="mx-4">
      <div class="overflow-x-auto relative shadow-xl sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Task Name
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Delete
              </th>
              <th scope="col" class="py-3 px-6">
                Comment
              </th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task) => (
              <tr
                key={task.id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {task.name}
                </th>
                <td class="py-4 px-6">
                  {task.status === "pending" ? (
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                      <span className="">Pending</span>
                    </div>
                  ) : (
                    <Link>
                      <div
                        onClick={() => handleTaskPending(task._id)}
                        className="flex items-center hover:text-green-500 cursor-pointer"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                        <span className="">Complete</span>
                      </div>
                    </Link>
                  )}
                </td>
                <td class="py-4 px-6">
                  <Link>
                    <div
                      onClick={() => handleDeleteTask(task._id)}
                      className="flex items-center"
                    >
                      <button
                        type="button"
                        class="text-2xl flex justify-center items-center w-8 h-8 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500 focus:text-white"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </Link>
                </td>
                <td class="py-4 px-6">$2999</td>
                <td class="py-4 px-6 text-right">
                  <Link
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
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

export default CompletedTaskTable;
