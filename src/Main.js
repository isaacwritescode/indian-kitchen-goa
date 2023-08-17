import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import Layout from "./layout";
import Landing from "./pages/landing";

export default function Main() {
  const location = useLocation()
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY === 0
        ? setUserHasScrolled(false)
        : setUserHasScrolled(true);

    };
    if (isMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuVisible]);

  useEffect(() => {
    sal({
      threshold: 0.3,
    });
  }, [location?.pathname]);

  return <Routes>
    <Route
      path="/"
      element={
        <Layout
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
          userHasScrolled={userHasScrolled}
        />
      }
    >
      <Route index element={<Landing />} />
    </Route>
  </Routes>
}