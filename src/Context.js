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

  //get current user
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/api/user/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setCurrentUser(content);
      setUpdateEmail(content.email);
      setUpdateFirstName(content.firstname);
      setUpdateLastName(content.lastname);
      setUpdateNumber(content.number);
      setUpdateUserBio(content.bio || "");
      setAuthenticated(true);
    })();
  }, []);

  //states for Updating User:
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [updateConfirmPassword, setUpdateConfirmPassword] = useState("");
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateNumber, setUpdateNumber] = useState("");
  const [updateUserBio, setUpdateUserBio] = useState("");

  //States for adding receiving/adding pet from database
  const [listOfPets, setListOfPets] = useState([]);
  const [pictureUrl, setPictureUrl] = useState("");
  const [petFormData, setPetFormData] = useState({
    type: "",
    name: "",
    adoptionStatus: "",
    picture: "",
    height: "",
    weight: "",
    color: "",
    bio: "",
    hypoallergenic: false,
    dietery: "",
    breed: "",
  });

  //function to add image:
  const uploadImage = (event) => {
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "m6bqc7p6");
    formData.append("file", files);
    axios
      .post("https://api.cloudinary.com/v1_1/dyfdduadc/image/upload", formData)
      .then((response) =>
        setPetFormData((prevFormData) => {
          return {
            ...prevFormData,
            picture: String(response.data.secure_url),
          };
        })
      )
      .catch((err) => console.log(err));
  };

  // States to receive individual pet data
  const [petData, setPetData] = useState({});

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
    Axios.get("http://localhost:5000/users/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  //Receiving list of Pets
  useEffect(() => {
    Axios.get("http://localhost:5000/pets/getPets", {
      userID: currentUser._id,
    }).then((response) => {
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
    if (
      (updatePassword || updateConfirmPassword) &&
      updatePassword !== updateConfirmPassword
    ) {
      console.log("passwords must match");
    } else {
      console.log("updating user!!!!!");
      const data = {
        firstname: updateFirstName,
        lastname: updateLastName,
        email: updateEmail,
        number: updateNumber,
        bio: updateUserBio,
      };
      if (updatePassword) {
        data.password = updatePassword;
      }
      fetch("http://localhost:5000/users/update", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
  };

  //creating pets
  const createPet = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5000/pets/createPets", {
      userID: currentUser._id,
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
          userID: currentUser._id,
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
    window.location.reload();
    handleClose();
  }

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
        updateUserBio,
        setUpdateUserBio,
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
        updatePassword,
        setUpdatePassword,
        updateConfirmPassword,
        setUpdateConfirmPassword,
        updateFirstName,
        setUpdateFirstName,
        updateLastName,
        setUpdateLastName,
        updateNumber,
        setUpdateNumber,
        updateUser,
        setPictureUrl,
        pictureUrl,
        uploadImage,
        updateEmail,
      }}
    >
      {children}
    </Context.Provider>
  );
}
