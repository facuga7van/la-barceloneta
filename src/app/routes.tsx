import { createHashRouter, redirect } from "react-router";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./components/HomePage"));
const AboutPage = lazy(() => import("./components/AboutPage"));

export const router = createHashRouter([
  {
    path: "/",
    Component: () => (
      <Suspense fallback={<div className="min-h-screen" />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    Component: () => (
      <Suspense fallback={<div className="min-h-screen" />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);
