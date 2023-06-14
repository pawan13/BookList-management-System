import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SideBar } from "../side-bar/SideBar";

export const UserLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-75">
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
