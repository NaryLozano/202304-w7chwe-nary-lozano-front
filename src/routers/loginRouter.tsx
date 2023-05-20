import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import App from "../components/App/App";
import LoginFormPage from "../pages/loginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"/login"} replace />,
      },
    ],
  },
  { path: "/login", element: <LoginFormPage /> },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
