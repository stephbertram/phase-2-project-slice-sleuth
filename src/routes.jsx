import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Quiz",
    element: <Quiz />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/userPage",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
