import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Top from "./pages/Top";
import Activity from "./pages/Activity";
import Company from "./pages/Company";
import Memory from "./pages/Memory";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Box flex="1" p="0">
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/company" element={<Company />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default Router;
