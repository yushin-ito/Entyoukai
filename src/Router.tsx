import { BrowserRouter, Route, Routes } from "react-router-dom";
import Participant from "./pages/Participant";
import Contact from "./pages/Contact";
import Top from "./pages/Top";
import { Box } from "@chakra-ui/react";
import Member from "./pages/Member";
import Company from "./pages/Companty";

const Router = () => {
  return (
    <BrowserRouter>
      <Box flex="1" p="0">
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/company" element={<Company />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default Router;
