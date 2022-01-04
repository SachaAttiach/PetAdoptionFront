import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profiles from "./pages/admin/Profiles";
import Admin from "./pages/admin/Admin";
import Register from "./pages/Register";
import UserSettings from "./pages/UserSettings";
import AddPet from "./pages/admin/AddPet";
import MenuItem from "./components/MenuItem";
import UserItem from "./pages/admin/UserItem";
import MyPets from "./pages/PetPage/MyPets";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ContextProvider from "./Context";
import Dashboard from "./pages/admin/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AllPets from "./pages/admin/AllPets";
import AdminMenuItem from "./pages/admin/AdminMenuItem";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <PublicRoute exact path="/landing">
              <Landing />
            </PublicRoute>
            <PublicRoute exact path="/register">
              <Register />
            </PublicRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <PrivateRoute exact path="/menu">
              <Menu />
            </PrivateRoute>
            <PrivateRoute exact path="/profiles">
              <Profiles />
            </PrivateRoute>
            <PrivateRoute exact path="/usersettings">
              <UserSettings />
            </PrivateRoute>
            <PrivateRoute exact path="/addpet">
              <AddPet />
            </PrivateRoute>
            <PrivateRoute exact path="/getPets/:petID">
              <MenuItem />
            </PrivateRoute>
            <PrivateRoute exact path="/getUsers/:userID">
              <UserItem />
            </PrivateRoute>
            <PrivateRoute exact path="/myPets">
              <MyPets />
            </PrivateRoute>
            <PrivateRoute exact path="/allPets">
              <AllPets />
            </PrivateRoute>
            <PrivateRoute exact path="/allPets">
              <AllPets />
            </PrivateRoute>
            <PrivateRoute exact path="/getPetsAdmin/:petID">
              <AdminMenuItem />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
