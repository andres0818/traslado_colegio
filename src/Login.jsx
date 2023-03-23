import React, { useContext, useState } from "react";
import { dispatchDocContext } from "./context/Context";

const Login = () => {
  const { login } = useContext(dispatchDocContext);
  const [user, setUser] = useState();

  const handlerChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  


  return (
    <div className="w-100 vh-100 p-3 mb-2 bg-secondary text-dark">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Inicio sesión</h5>
          </div>
          <div className="modal-body">
            <input
              onChange={(e) => handlerChange(e)}
              name="email"
              className="form-control mb-2"
              type="text"
              placeholder="Correo"
              aria-label="Disabled input example"
            />
            <input
              onChange={(e) => handlerChange(e)}
              className="form-control"
              name="contrasena"
              type="text"
              placeholder="Contraseña"
              aria-label="Disabled input example"
            />
          </div>
          <div className="modal-footer">
            <button onClick={()=> login(user)} type="button" className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
