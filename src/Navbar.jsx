import React, { useState } from "react";

import { Link, Outlet,useLocation } from "react-router-dom";

const Navbar = () => {
  
  const location = useLocation()
  console.log(location.pathname)


  return (
    <>
      <nav className="nav nav-tabs">
        <Link
          className={`nav-link ${location.pathname === "/" && "active"}`}
          to="/"
        >
          Formulario
        </Link>
        <Link
          className={`nav-link ${location.pathname === "/listado" && "active"}`}
          to="/listado"
        >
          Listado
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
