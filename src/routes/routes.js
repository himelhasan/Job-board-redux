import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../AllPages/Home/Home";
import AddNewJob from "../AllPages/AddNewJob/AddNewJob";
import EditJob from "../AllPages/EditJob/EditJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-new-job", element: <AddNewJob /> },
      { path: "/edit-job", element: <EditJob /> },
    ],
  },
]);

export default routes;
