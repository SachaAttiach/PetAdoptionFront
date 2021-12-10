import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerNumber, setRegisterNumber] = useState(0);
  const [listOfUsers, setListOfUsers] = useState([]);

  // const [user, setUser] = useState({});
  // const [authenticated, setAuthenticated] = useState(null);

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   setAuthenticated(currentUser ? true : false);
  // });

  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    console.log("i've been clicked");
    Axios.post("http://localhost:5000/createUser", {
      firstname: registerFirstName,
      lastname: registerLastName,
      email: registerEmail,
      number: registerNumber,
      password: registerPassword,
      confirmpassword: registerConfirmPassword,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          firstname: registerFirstName,
          lastname: registerLastName,
          email: registerEmail,
          number: registerNumber,
          password: registerPassword,
          confirmpassword: registerConfirmPassword,
        },
      ]);
    });
  };

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
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        registerConfirmPassword,
        setRegisterConfirmPassword,
        registerFirstName,
        setRegisterFirstName,
        registerLastName,
        setRegisterLastName,
        registerNumber,
        setRegisterNumber,
        listOfUsers,
        setListOfUsers,
        createUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
