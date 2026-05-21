import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundFX from "./BackgroundFX";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative" data-testid="layout-root">
      <BackgroundFX />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20 relative z-[1]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
