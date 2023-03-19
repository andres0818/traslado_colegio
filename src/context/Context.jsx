import React, { createContext, useState } from "react";

const doctContext = createContext();
const dispatchDocContext = createContext();

const Context = ({ children }) => {
  const [doc, setDoc] = useState();
  

  const state = {};
  const dispatch = {};
  return (
    <doctContext.Provider value={state}>
      <dispatchDocContext.Provider value={dispatch}>
        {children}
      </dispatchDocContext.Provider>
    </doctContext.Provider>
  );
};

export default Context;
