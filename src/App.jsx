import { createBrowserRouter } from "react-router-dom";
import Calender from "./pages/Calender";

// Define your routes as an array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <Calender />,
    errorElement: <Calender />, // Shown when no route matches
  },
  {
    path: "/calender",
    element: <Calender />,
  },
  {
    path: "/dashboard",
    element: <Calender />,
  },
]);

export default router;
