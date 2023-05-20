import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import LoginForm from "../components/LoginForm/LoginForm";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <LoginForm /> },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
