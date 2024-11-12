import { Box } from "@chakra-ui/react";
import { lazy, Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation
} from "react-router-dom";

import ProgressBar from "./components/molecules/ProgressBar";

const Top = lazy(() => import("./pages/Top"));
const Activity = lazy(() => import("./pages/Activity"));
const Article = lazy(() => import("./pages/Article"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const Contact = lazy(() => import("./pages/Contact"));
const Memory = lazy(() => import("./pages/Memory"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SitePolicy = lazy(() => import("./pages/SitePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Error = lazy(() => import("./pages/Error"));

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box flex="1" p="0" bg="white">
      <ProgressBar />
      <Outlet />
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Top />
          </Suspense>
        )
      },
      {
        path: "/top",
        element: (
          <Suspense>
            <Top />
          </Suspense>
        )
      },
      {
        path: "/activity",
        element: (
          <Suspense>
            <Activity />
          </Suspense>
        )
      },
      {
        path: "/article/:id",
        element: (
          <Suspense>
            <Article />
          </Suspense>
        )
      },
      {
        path: "/sponsor",
        element: (
          <Suspense>
            <Sponsor />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        )
      },
      {
        path: "/memory",
        element: (
          <Suspense>
            <Memory />
          </Suspense>
        )
      },
      {
        path: "/privacypolicy",
        element: (
          <Suspense>
            <PrivacyPolicy />
          </Suspense>
        )
      },
      {
        path: "/sitepolicy",
        element: (
          <Suspense>
            <SitePolicy />
          </Suspense>
        )
      },
      {
        path: "/notfound",
        element: (
          <Suspense>
            <NotFound />
          </Suspense>
        )
      },
      {
        path: "/error",
        element: (
          <Suspense>
            <Error />
          </Suspense>
        )
      },
      { path: "*", element: <Navigate to="/notfound" replace /> }
    ]
  }
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
