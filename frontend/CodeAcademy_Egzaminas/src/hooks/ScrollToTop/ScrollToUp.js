import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation hook gives us the current location object, which contains the current pathname
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0) scrolls the window to the top-left corner of the page
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array with pathname ensures this effect runs every time the pathname changes

  return null; // This component doesn't render any UI, so it returns null
};

export default ScrollToTop;
