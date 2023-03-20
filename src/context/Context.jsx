import React, { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
export const doctContext = createContext();
export const dispatchDocContext = createContext();

const date = new Date().toLocaleString("es-ES", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const Context = ({ children }) => {
  const [doc, setDoc] = useState({ date: date });

  const createDoc = () => {
    if (doc.firm)
      return addDoc(collection(db, "student"), {
        adultName: doc?.adultName,
        adultId: doc?.adultId,
        student: doc?.student,
        grade: doc?.grade,
        firm: doc?.firm,
      })
        .then(() => {
          setDoc();
          setDoc({ date: date });
          alert("Documento guardado exitosamente");
        })
        .catch((err) => alert(err));
    else return alert("Por favor firme el documento");
  };


  

  const state = { doc };
  const dispatch = { setDoc, createDoc };
  return (
    <doctContext.Provider value={state}>
      <dispatchDocContext.Provider value={dispatch}>
        {children}
      </dispatchDocContext.Provider>
    </doctContext.Provider>
  );
};

export default Context;
