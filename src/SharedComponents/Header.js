import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <img src={logo} alt="logo" />
      </nav>
    </Link>
  );
};

export default Header;
