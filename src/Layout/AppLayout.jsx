import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AppLayout = () => {
  const location = useLocation();

  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      <motion.div
        key={location.pathname} // re-animate on route change
        initial={{ y: 50, opacity: 0 }} // start below
        animate={{ y: 0, opacity: 1 }} // move to natural position
        exit={{ y: -50, opacity: 0 }} // optional: exit animation upwards
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1"
      >
        <Outlet />
      </motion.div>

      <Footer />
    </main>
  );
};

export default AppLayout;
