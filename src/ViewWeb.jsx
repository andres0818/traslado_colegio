import React from "react";
import { Button } from "react-bootstrap";
import "./sass/ViewDoc.scss";

const ViewWeb = () => {
  const date = new Date().toLocaleString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="container">
      <h1 className="container__title">Autorización de traslado al colegio</h1>
      <div className="container__doc">
        <div className="container__info">
          <p>{`Medellín,${date} `}</p>
          <p>Señores:</p>
          <h4>FUNDACION BIBE</h4>
          <p>Ref. Cruce de saldo</p>
          <p>
            Yo <input type="text" name="" id="" /> identificado(a) con cédula N°
            <input type="number" name="" id="" /> autorizo a la FUNDACIÓN BIBE
            identificada con Nit. 901.651.472-4 que el saldo a favor que tengo
            por concepto de Guías, del estudiante
            <input type="text" name="" id="" /> del grado <input type="text" />,
            sea trasladado al COLEGIO MILITAR COLMILGPNO identificado con Nit.
            811.015.863 para abono a la pensión.
          </p>
        </div>
        <div>
          <p>Cordialmente,</p>
          <input type="text" />
          <p>
            cc: <input type="number" name="" id="" />
          </p>
        </div>
      </div>
      <Button style={{ marginBottom: "50px" }}>Guardar documento</Button>
    </div>
  );
};

export default ViewWeb;
