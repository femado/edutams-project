import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calender from "./pages/Calender";
import Confirm from "./pages/Confirm";
import CreateClassArms from "./pages/CreateClassArms";
import Landingpage from "./pages/Landingpage";

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
    path: "/confirm",
    element: <Confirm />,
  },
  {
    path: "/create-class-arms",
    element: <CreateClassArms />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
