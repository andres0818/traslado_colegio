import React, { useEffect, useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [statePage, setStatePage] = useState(false);

  useEffect(() => {
    function handleVisibilityChange() {
      setStatePage(document.hidden);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    document.title = statePage
      ? "Fundacion BIBE"
      : location.pathname === "/"
      ? "Formulario"
      : "Listado";
  }, [statePage,location.pathname]);
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
