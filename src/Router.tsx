import { Box } from "@chakra-ui/react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";

import ProgressBar from "./components/molecules/ProgressBar";
import Activity from "./pages/Activity";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Memory from "./pages/Memory";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SitePolicy from "./pages/SitePolicy";
import Sponsor from "./pages/Sponsor";
import Top from "./pages/Top";

const Layout = () => (
  <Box flex="1" p="0" bg="white">
    <ProgressBar />
    <ScrollRestoration />
    <Outlet />
  </Box>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Top /> },
      { path: "/top", element: <Top /> },
      { path: "/activity", element: <Activity /> },
      { path: "/article/:id", element: <Article /> },
      { path: "/sponsor", element: <Sponsor /> },
      { path: "/contact", element: <Contact /> },
      { path: "/memory", element: <Memory /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/sitepolicy", element: <SitePolicy /> },
      { path: "/notfound", element: <NotFound /> },
      { path: "/error", element: <Error /> },
      { path: "*", element: <Navigate to="/notfound" replace /> }
    ]
  }
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
