import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Public/PublicRoutes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
