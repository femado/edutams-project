import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calender from "./pages/Calender";
import Landingpage from "./pages/Landingpage";
import Confirm from "./pages/Confirm";
import CreateClassArms from "./pages/CreateClassArms";
import AddLearners from "./pages/AddLearners";
import AddTeachers from "./pages/AddTeachers";
import LastPage from "./pages/LastPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/calender",
    element: <Calender />,
  }
  ,
  {
    path: "/confirm",
    element: <Confirm />,
  },
  {
    path: "/create-class-arms",
    element: <CreateClassArms />,
  },
  {
    path: "/add-learners",
    element: <AddLearners />,
  },
  {
    path: "/add-teachers",
    element: <AddTeachers />, 
  },
  {
    path: "/last-page",
    element: <LastPage />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
