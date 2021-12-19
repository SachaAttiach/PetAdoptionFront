import { createContext, useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  //States for Modal register/login page
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  //States for User registration
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerNumber, setRegisterNumber] = useState(0);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [userBio, setUserBio] = useState("");

  //states for Updating User:
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [updateConfirmPassword, setUpdateConfirmPassword] = useState("");
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateNumber, setUpdateNumber] = useState(0);
  const [updateUserBio, setUpdateUserBio] = useState("");

  //States for adding receiving/adding pet from database
  const [listOfPets, setListOfPets] = useState([]);
  const [petFormData, setPetFormData] = useState({
    type: "",
    name: "",
    adoptionStatus: true,
    picture: "",
    height: 0,
    weight: 0,
    color: "",
    bio: "",
    hypoallergenic: true,
    dietery: "",
    breed: "",
  });

  //state for editing the pets
  const [EditPetFormData, setEditPetFormData] = useState({
    type: "",
    name: "",
    adoptionStatus: "",
    picture: "",
    height: 0,
    weight: 0,
    color: "",
    bio: "",
    hypoallergenic: true,
    dietery: "",
    breed: "",
  });

  // States to receive individual pet data
  const [petData, setPetData] = useState({});
  const [loginStatus, setLoginStatus] = useState("");

  // States to receive individual pet data
  const [userData, setUserData] = useState({});
  //login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //to redirect register to login page:
  const [redirect, setRedirect] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  // Receiving list of Users
  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  //Receiving list of Pets
  useEffect(() => {
    Axios.get("http://localhost:5000/getPets").then((response) => {
      setListOfPets(response.data);
    });
  }, []);



  // creating user
  const createUser = () => {
    Axios.post("http://localhost:5000/api/user/register", {
      firstname: registerFirstName,
      lastname: registerLastName,
      email: registerEmail,
      number: registerNumber,
      // bio: userBio,
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
          // bio: userBio,
          password: registerPassword,
          confirmpassword: registerConfirmPassword,
        },
      ]);
    });
    setRedirect(true);
  };

  //Updating User:
  const updateUser = () => {
    Axios.put("http://localhost:5000/api/user/update", {
      // id: id,
      firstname: updateFirstName,
      lastname: updateLastName,
      email: updateEmail,
      number: updateNumber,
      // bio: updateUserBio,
      password: updatePassword,
      confirmpassword: updateConfirmPassword,
    });
  };

  //creating pets
  const createPet = () => {
    Axios.post("http://localhost:5000/createPets", {
      type: petFormData.type,
      name: petFormData.name,
      adoptionStatus: petFormData.adoptionStatus,
      picture: petFormData.picture,
      height: petFormData.height,
      weight: petFormData.weight,
      color: petFormData.color,
      bio: petFormData.bio,
      hypoallergenic: petFormData.hypoallergenic,
      dietery: petFormData.diet,
      breed: petFormData.breed,
    }).then((response) => {
      setListOfPets([
        ...listOfPets,
        {
          type: petFormData.type,
          name: petFormData.name,
          adoptionStatus: petFormData.adoptionStatus,
          picture: petFormData.picture,
          height: petFormData.height,
          weight: petFormData.weight,
          color: petFormData.color,
          bio: petFormData.bio,
          hypoallergenic: petFormData.hypoallergenic,
          dietery: petFormData.diet,
          breed: petFormData.breed,
        },
      ]);
    });
  };



  //login user
  async function loginUser(event) {
    event.preventDefault();
    await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    });
    setRedirect(true);
    setAuthenticated(true);
    handleClose();
  }

  //get current user
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/api/user/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setCurrentUser(content);
    })();
  });

  //logout user:
  const logout = async () => {
    await fetch("http://localhost:5000/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    setAuthenticated(false);
    window.location.reload();
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
        userBio,
        setUserBio,
        listOfPets,
        createPet,
        setPetFormData,
        petFormData,
        petData,
        setPetData,
        loginEmail,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        loginUser,
        redirect,
        setRedirect,
        currentUser,
        setCurrentUser,
        logout,
        authenticated,
        userData,
        setUserData,
        setUpdateEmail,
        setUpdatePassword,
        setUpdateConfirmPassword,
        setUpdateFirstName,
        setUpdateLastName,
        setUpdateNumber,
        setUpdateUserBio,
        updateUser,
        EditPetFormData,
        setEditPetFormData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
