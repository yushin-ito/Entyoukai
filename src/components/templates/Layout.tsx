import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

import { useLoading } from "../../contexts";
import useScroll from "../../hooks/tools";
import Footer from "../organisms/Footer";
import MainVisual from "../organisms/MainVisual";

const Layout = () => {
  const { pathname } = useLocation();

  const { isLoading } = useLoading();
  const { scrollToElement } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 1);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" && !isLoading && window.scrollY <= 1) {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const sectionId = hash.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            scrollToElement(element, 500);
          }
        } else {
          const targetId = "target";
          const element = document.getElementById(targetId);
          if (element) {
            scrollToElement(element, 500);
          }
        }
      }, 300);
    }
  }, [pathname, isLoading, scrollToElement]);

  return (
    <VStack flex="1" p="0" spacing={{ base: "16", md: "24" }} bg="white">
      <MainVisual />
      <Outlet />
      <Footer />
    </VStack>
  );
};

export default Layout;
