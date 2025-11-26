import React from "react";
import { createContext } from "react";
import Sweat from "sweetalert2";

// 1- Creamos el contexto
export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const showAlert = ({
    title,
    text,
    icon = "success",
    confirmButtonText = "Aceptar",
  }) => {
    return Sweat.fire({
      title,
      text,
      icon,
      confirmButtonText: confirmButtonText,
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
