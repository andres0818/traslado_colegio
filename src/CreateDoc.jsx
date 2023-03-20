import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { dispatchDocContext, doctContext } from "./context/Context";
import Firm from "./Firm/Firm";
import "./sass/ViewDoc.scss";

const CreateDoc = () => {
  const { setDoc, createDoc } = useContext(dispatchDocContext);
  const { doc } = useContext(doctContext);
  const handlerChange = (e) => {
    setDoc({
      ...doc,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    createDoc();
  };

  return (
    <div className="container">
      <h1 className="container__title">Autorización de traslado al colegio</h1>
      <form onSubmit={handlerSubmit} className="container">
        <div className="container__doc">
          <div className="container__info">
            <p>{`Medellín,${doc.date} `}</p>
            <p>Señores:</p>
            <h4>FUNDACION BIBE</h4>
            <p>Ref. Cruce de saldo</p>
            <p>
              Yo
              <input
                required
                onChange={(e) => handlerChange(e)}
                type="text"
                name="adultName"
                id=""
              />
              identificado(a) con cédula N°
              <input
                required
                onChange={(e) => handlerChange(e)}
                type="text"
                name="adultId"
                id=""
              />
              autorizo a la FUNDACIÓN BIBE identificada con Nit. 901.651.472-4
              que el saldo a favor que tengo por concepto de Guías, del
              estudiante
              <input
                required
                onChange={(e) => handlerChange(e)}
                type="text"
                name="student"
                id=""
              />
              del grado
              <input
                required
                onChange={(e) => handlerChange(e)}
                type="text"
                name="grade"
              />
              , sea trasladado al COLEGIO MILITAR COLMILGPNO identificado con
              Nit. 811.015.863 para abono a la pensión.
            </p>
          </div>
          <div>
            <p>Cordialmente,</p>
            <Firm />
            <p>cc: {doc?.adultId && doc.adultId}</p>
          </div>
        </div>
        <Button
          type="submit"
          onSubmit={() => console.log("Submit")}
          style={{ marginBottom: "50px" }}
        >
          Guardar documento
        </Button>
      </form>
    </div>
  );
};

export default CreateDoc;
