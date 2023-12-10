import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hearder from "./Hearder";

const Layout = () => {
  return (
    <>
      <Hearder />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
