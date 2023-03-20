import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [className, setClassName] = useState("formulario");

  const handlerClick = (data) => {
    setClassName(data);
  };

  return (
    <>
      <nav className="nav nav-tabs">
        <Link
          onClick={() => handlerClick("formulario")}
          className={`nav-link ${className === "formulario" && "active"}`}
          to="/"
        >
          Formulario
        </Link>
        <Link
          onClick={() => handlerClick("listado")}
          className={`nav-link ${className === "listado" && "active"}`}
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
