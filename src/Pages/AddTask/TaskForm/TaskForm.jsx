import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const TaskForm = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const imageHostKey = "41316516c169c0f2cabfe6b243f6f202";

  const handleAddTask = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const uri = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(uri, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const task = {
            name: data.name,
            img: imgData.data.display_url,
            postedBy: user.displayName,
            email: user.email,
            postedTime: new Date().toDateString(),
            status: "uncompleted",
          };
          fetch("http://localhost:5000/add-task", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added Successfully`);
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              document.getElementById("task-form").reset();
            });
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold ">Add Your Task</h1>

      <form
        className="form-control "
        id="task-form"
        onSubmit={handleSubmit(handleAddTask)}
      >
        {/* Name */}
        <div>
          <label>
            <span className="text-sm font-semibold mt-3">Name</span>
          </label>
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="name"
            placeholder=""
            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Image */}
        <div>
          <label>
            <span className="text-sm font-semibold mt-3">Image</span>
          </label>
          <input
            {...register("img", {
              required: "Image is required",
            })}
            type="file"
            placeholder=""
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>

        {/* Submit */}
        <input
          className=" mt-5  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          value="Add Task"
          type="submit"
        />
      </form>
    </div>
  );
};

export default TaskForm;
