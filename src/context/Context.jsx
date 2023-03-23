import React, { createContext, useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";

export const doctContext = createContext();
export const dispatchDocContext = createContext();

const date = new Date().toLocaleString("es-ES", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Context = ({ children }) => {
  const [doc, setDoc] = useState({ date: date });
  const [dataUser, setDataUser] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const logOut = () =>
    signOut(auth).then(() =>
      Toast.fire({
        icon: "error",
        title: "Sesión cerrada",
      })
    );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  const login = (user) => {
    signInWithEmailAndPassword(auth, user.email, user.contrasena)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      })
      .catch((err) =>
        Toast.fire({
          icon: "error",
          title: err.message,
        })
      );
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
          Toast.fire({
            icon: "success",
            title: "Documento Creado",
          });
        })
        .catch((err) =>
          Toast.fire({
            icon: "error",
            title: err.message,
          })
        );
    else
      return Swal.fire({
        icon: "error",
        title: "Por favor firme el documento",
      });
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
  const dispatch = { setDoc, createDoc, login, logOut, Toast };
  return (
    <doctContext.Provider value={state}>
      <dispatchDocContext.Provider value={dispatch}>
        {children}
      </dispatchDocContext.Provider>
    </doctContext.Provider>
  );
};

export default Context;
