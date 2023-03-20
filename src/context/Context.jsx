import React, { createContext, useState } from "react";

export const doctContext = createContext();
export const dispatchDocContext = createContext();

const date = new Date().toLocaleString("es-ES", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const Context = ({ children }) => {
  const [doc, setDoc] = useState({ date: date });

  const state = { doc };
  const dispatch = { setDoc };
  return (
    <doctContext.Provider value={state}>
      <dispatchDocContext.Provider value={dispatch}>
        {children}
      </dispatchDocContext.Provider>
    </doctContext.Provider>
  );
};

export default Context;
