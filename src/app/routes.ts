import { createHashRouter, redirect } from "react-router";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);
