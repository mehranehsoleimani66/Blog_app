"use client";

import React, { createContext, useState } from "react";

export const themContext = createContext();
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ Children }) => {
  const [theme, setTheme] = useState(() => {
    getFromLocalStorage();
  });

  return <themContext.Provider>{Children}</themContext.Provider>;
};
