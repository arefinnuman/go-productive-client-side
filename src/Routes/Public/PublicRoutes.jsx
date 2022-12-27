import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import AddTask from "../../Pages/AddTask/AddTask/AddTask";
import Blog from "../../Pages/Blog/Blog/Blog";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home/Home";
import MyTask from "../../Pages/MyTask/MyTask/MyTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
      {
        path: "/my-task",
        element: <MyTask />,
      },
      {
        path: "/completed-task",
        element: <CompletedTask />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
