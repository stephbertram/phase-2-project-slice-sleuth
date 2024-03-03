import { createRoot } from "react-dom/client";
import { router } from "./routes";

import { RouterProvider } from "react-router-dom";
import UsersProvider from "./context/UsersProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <UsersProvider>
    <RouterProvider router={router} />
  </UsersProvider>
);