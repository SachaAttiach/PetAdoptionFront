import { createContext, useState, useEffect } from "react";
import Axios from "axios";

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
  //States for adding receiving/adding pet from database
  const [listOfPets, setListOfPets] = useState([]);
  const [petFormData, setPetFormData] = useState({
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
  const [petData, setPetData] = useState({});

  // const [user, setUser] = useState({});
  // const [authenticated, setAuthenticated] = useState(null);

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   setAuthenticated(currentUser ? true : false);
  // });

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

  const createUser = () => {
    console.log("i've been clicked");
    Axios.post("http://localhost:5000/api/user/register", {
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
      }}
    >
      {children}
    </Context.Provider>
  );
}
