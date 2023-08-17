import { Outlet } from "react-router-dom";
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
      <Outlet />
    </>
  );
}
