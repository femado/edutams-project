import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calender from "./pages/Calender";
import Landingpage from "./pages/Landingpage";
import Managepage from "./pages/Managepage";
import Setuppage from "./pages/Setuppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/calender",
    element: <Calender />,
  },
  {
    path: "/setup",
    element: <Setuppage />,
  },
  {
    path: "/manage",
    element: <Managepage />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
