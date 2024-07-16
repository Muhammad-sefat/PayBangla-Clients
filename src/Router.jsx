import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
