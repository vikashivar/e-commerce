import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  return <Context.Provider value={11}>{children}</Context.Provider>;
};

export default AppContext;
