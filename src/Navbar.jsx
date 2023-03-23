import React, { useContext, useEffect, useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";
import { dispatchDocContext, doctContext } from "./context/Context";

const Navbar = () => {
  const location = useLocation();
  const [statePage, setStatePage] = useState(false);
  const { logOut } = useContext(dispatchDocContext);
  const { isLogin } = useContext(doctContext);

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
  }, [statePage, location.pathname]);
  return (
    <>
      <nav className="nav nav-tabs d-flex justify-content-between">
        <div className="d-flex">
          <Link
            className={`nav-link ${location.pathname === "/" && "active"}`}
            to="/"
          >
            Formulario
          </Link>
          <Link
            className={`nav-link ${
              location.pathname === "/listado" && "active"
            }`}
            to="/listado"
          >
            Listado
          </Link>
        </div>
        {isLogin && (
          <button
            onClick={logOut}
            className="btn btn-danger"
            style={{ marginRight: "5px" }}
          >
            Cerrar sesion
          </button>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
