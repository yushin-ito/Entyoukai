import { Box, VStack } from "@chakra-ui/react";
import { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigate
} from "react-router-dom";

import ProgressBar from "./components/molecules/ProgressBar";
import MainVisual from "./components/organisms/MainVisual";

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

const Fallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error");
  }, [navigate]);

  return null;
};

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 1);
  }, [pathname]);

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <Box flex="1" p="0" bg="white">
        <ProgressBar />
        <VStack flex="1" spacing={{ base: "16", md: "24" }}>
          <MainVisual />
          <Outlet />
        </VStack>
      </Box>
    </ErrorBoundary>
  );
};

const router = createBrowserRouter([
  {
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
      }
    ]
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
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
