import React, { createContext, useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const doctContext = createContext();
export const dispatchDocContext = createContext();

const date = new Date().toLocaleString("es-ES", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const Context = ({ children }) => {
  const [doc, setDoc] = useState({ date: date });
  const [dataUser, setDataUser] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const logOut = () => signOut(auth);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  const login = (user) => {
    signInWithEmailAndPassword(auth, user.email, user.contrasena)
      .then(() => {
        console.log("User logged ");
      })
      .catch((err) => console.log(err));
  };

  const createDoc = () => {
    if (doc.firm)
      return addDoc(collection(db, "students"), {
        adultName: doc?.adultName,
        date: doc?.date,
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

  const getDocuments = () => {
    onSnapshot(collection(db, "students"), (snapshot) => {
      setDataUser(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  useEffect(() => {
    getDocuments();
  }, []);

  const state = { doc, dataUser, isLogin };
  const dispatch = { setDoc, createDoc, login, logOut };
  return (
    <doctContext.Provider value={state}>
      <dispatchDocContext.Provider value={dispatch}>
        {children}
      </dispatchDocContext.Provider>
    </doctContext.Provider>
  );
};

export default Context;
