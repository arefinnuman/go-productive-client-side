import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/PublicRoute/PublicRoutes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
