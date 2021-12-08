import { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        handleOpen,
        handleClose,
        setOpenLogin,
        openLogin,
        handleOpenLogin,
        handleCloseLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
}
