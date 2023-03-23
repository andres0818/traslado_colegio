import React, { useContext } from "react";
import Cards from "./Cards";
import { doctContext } from "./context/Context";
import "./sass/ListStudents.scss";

const ListStudents = () => {
  const { dataUser } = useContext(doctContext);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Autorizaciones</h1>
      </div>
      <div className="table__container">
        {dataUser &&
          dataUser.map((doc, index) => (
            <Cards key={index} doc={doc} index={index} />
          ))}
      </div>
    </>
  );
};

export default ListStudents;
