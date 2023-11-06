import React from "react";
import Footer from "../components/footer/Footer";
import { AppHeader } from "../components/header/app-header";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
