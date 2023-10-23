import { Children, createContext, useState } from "react";

export const themContext = createContext();
const getFromLocalStorage = () => {
  const value = localStorage.getItem("theme");
  console.log(value);
  return value || "light";
};

export const themContextProvider = () => {
  const [theme, setTheme] = useState("light");

  return (
    <themContext.Provider value={{ theme }}>{Children}</themContext.Provider>
  );
};
