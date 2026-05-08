import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import AddLearners from "./pages/AddLearners";
import AddTeachers from "./pages/AddTeachers";
import Calender from "./pages/Calender";
import Confirm from "./pages/Confirm";
import CreateClassArms from "./pages/CreateClassArms";
import Landingpage from "./pages/Landingpage";
import LastPage from "./pages/LastPage";
import Managepage from "./pages/Managepage";
import Setuppage from "./pages/Setuppage";

const stageComponents = {
  1: <Landingpage />,
  one: <Landingpage />,
  2: <Setuppage />,
  two: <Setuppage />,
  3: <Managepage />,
  three: <Managepage />,
  4: <Calender />,
  four: <Calender />,
  5: <Confirm />,
  five: <Confirm />,
  6: <CreateClassArms />,
  six: <CreateClassArms />,
  7: <AddLearners />,
  seven: <AddLearners />,
  8: <AddTeachers />,
  eight: <AddTeachers />,
  9: <LastPage />,
  final: <LastPage />,
  finalstage: <LastPage />,
};

const StageRouter = () => {
  const [searchParams] = useSearchParams();
  const stage = (searchParams.get("stage") || "1").toLowerCase();

  return stageComponents[stage] || <Navigate to="/?stage=1" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <StageRouter />,
  },
  {
    path: "*",
    element: <Navigate to="/?stage=1" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
