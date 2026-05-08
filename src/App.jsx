import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calender from "./pages/Calender";
import Landingpage from "./pages/Landingpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/calender",
    element: <Calender />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
