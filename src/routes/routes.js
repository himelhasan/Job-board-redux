import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../AllPages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default routes;