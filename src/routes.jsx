import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Scores from "./pages/Scores";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Template from "./pages/Template";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
    
      },
      {
        path: "/quiz",
        element: <Quiz />,
    
      },
      {
        path: "/scores",
        element: <Scores />,
    
      }
    ]
  },
])

