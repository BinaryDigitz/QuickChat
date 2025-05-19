import React from "react";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

function AppProvider({ children }) {
  const navigate = useNavigate();

  const values = {
    navigate,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
