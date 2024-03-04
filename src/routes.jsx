import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Scores from "./pages/Scores";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
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
    path: "/Scores",
    element: <Scores />,
    errorElement: <ErrorPage />,
  },
])

