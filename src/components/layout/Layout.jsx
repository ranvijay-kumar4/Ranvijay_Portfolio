import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";

/**
 * Layout component that wraps all pages
 * Includes Navbar and MobileMenu
 */
export const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <MobileMenu />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

