import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";
import { Menu } from "./common/Menu";
import { Navbar } from "./common/Navbar";

export default function Layout({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) {
  return (
    <>
      <Navbar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        userHasScrolled={userHasScrolled}
      />
      {isMenuVisible &&
        <Menu setIsMenuVisible={setIsMenuVisible} />
      }
      <Outlet />
      <Footer />
    </>
  );
}
