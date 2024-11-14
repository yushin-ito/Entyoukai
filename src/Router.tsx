import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import ProgressBar from "./components/molecules/ProgressBar";
import Fallback from "./components/templates/Fallback";
import Layout from "./components/templates/Layout";

const Top = lazy(() => import("./pages/Top"));
const Activity = lazy(() => import("./pages/Activity"));
const Article = lazy(() => import("./pages/Article"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const Contact = lazy(() => import("./pages/Contact"));
const Memory = lazy(() => import("./pages/Memory"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SitePolicy = lazy(() => import("./pages/SitePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Fallback />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Top />
          </Suspense>
        )
      },
      {
        path: "/top",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Top />
          </Suspense>
        )
      },
      {
        path: "/activity",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Activity />
          </Suspense>
        )
      },
      {
        path: "/article/:id",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Article />
          </Suspense>
        )
      },
      {
        path: "/sponsor",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Sponsor />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Contact />
          </Suspense>
        )
      },
      {
        path: "/memory",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Memory />
          </Suspense>
        )
      },
      {
        path: "/privacypolicy",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <PrivacyPolicy />
          </Suspense>
        )
      },
      {
        path: "/sitepolicy",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <SitePolicy />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "/notfound",
    element: (
      <Suspense fallback={<ProgressBar />}>
        <NotFound />
      </Suspense>
    )
  },
  { path: "*", element: <Navigate to="/notfound" replace /> }
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
