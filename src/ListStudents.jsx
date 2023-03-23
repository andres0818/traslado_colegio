import React, { useContext } from "react";
import Cards from "./Cards";
import { doctContext } from "./context/Context";
import Login from "./Login";
import "./sass/ListStudents.scss";

const ListStudents = () => {
  const { dataUser, isLogin } = useContext(doctContext);
  return (
    <>
      {isLogin ? (
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
      ) : (
        <Login />
      )}
    </>
  );
};

export default ListStudents;
