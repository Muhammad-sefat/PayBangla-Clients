import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";
import DashboardLayout from "./Pages/DashboardLayout";
import ProtectedRoute from "./Pages/ProtectedRoute";

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
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
  },
]);

export default router;
