import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../SharedComponents/Header";
import Sidebar from "../SharedComponents/Sidebar";

const Main = () => {
  return (
    <div>
      <Header />
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        <div class="lg:pl-[14rem]  mt-[5.8125rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
