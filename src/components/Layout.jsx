import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ categories }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Logo />
      <Navbar categories={categories} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
