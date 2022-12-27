import React from "react";
import { Link } from "react-router-dom";

const TaskTable = () => {
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
                  <label for="checkbox-all-search" class="sr-only">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1672111864932-cb19a9d6efb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="ss"
                  className="w-10 h-10 rounded-full"
                />

                <div class="pl-3">
                  <div class="text-base font-semibold">Sing A Song</div>
                  <div class="font-normal text-gray-500">Date</div>
                </div>
              </th>
              <td class="py-4 px-6">High Priority</td>
              <td class="py-4 px-6">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  Uncompleted
                </div>
              </td>
              <td class="py-4 px-6">
                <Link
                  to="/edit-task"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
