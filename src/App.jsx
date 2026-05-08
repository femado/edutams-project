<<<<<<< femado
import React from 'react'

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calender from "./pages/Calender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calender />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
>>>>>>> develop
