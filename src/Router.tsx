import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import Activity from "./pages/Activity";
import Article from "./pages/Article";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Memory from "./pages/Memory";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SitePolicy from "./pages/SitePolicy";
import Top from "./pages/Top";

const AppRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/top" element={<Top />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/memory" element={<Memory />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/sitepolicy" element={<SitePolicy />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
  );
};

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Box flex="1" p="0" bg="white">
        <AppRouter />
      </Box>
    </BrowserRouter>
  );
};

export default RootRouter;
