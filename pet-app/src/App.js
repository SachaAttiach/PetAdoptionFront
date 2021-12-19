import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profiles from "./pages/Profiles";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import UserSettings from "./pages/UserSettings";
import AddPet from "./pages/AddPet";
import MenuItem from "./components/MenuItem";
import UserItem from "./components/UserItem";
import MyPets from "./pages/MyPets";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextProvider from "./Context";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import react, { useContext } from "react";
import { Context } from "./Context";
import AllPets from "./pages/AllPets";
import AdminMenuItem from "./components/AdminMenuItem";

function App() {
  const { requireDash } = useContext(Context);
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            {/* <PublicRoute exact path="/register"> */}
            <Route exact path="/register">
              <Register />
            </Route>
            {/* </PublicRoute> */}
            {/* <PublicRoute exact path="/dashboard"> */}
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            {/* </PublicRoute> */}
            {/* <PrivateRoute exact path="/admin"> */}
            <Route exact path="/admin">
              <Admin />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/"> */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PublicRoute exact path="/landing"> */}
            <Route exact path="/landing">
              <Landing />
            </Route>
            {/* </PublicRoute> */}
            {/* <PrivateRoute exact path="/menu"> */}
            <Route exact path="/menu">
              <Menu />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/profiles"> */}
            <Route exact path="/profiles">
              <Profiles />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PublicRoute exact path="/usersettings"> */}
            <Route exact path="/usersettings">
              <UserSettings />
            </Route>
            {/* </PublicRoute> */}
            {/* <PrivateRoute exact path="/addpet"> */}
            <Route exact path="/addpet">
              <AddPet />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/getPets/:petID"> */}
            <Route exact path="/getPets/:petID">
              <MenuItem />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/getUsers/:userID"> */}
            <Route exact path="/getUsers/:userID">
              <UserItem />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/myPets"> */}
            <Route exact path="/myPets">
              <MyPets />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/allPets"> */}
            <Route exact path="/allPets">
              <AllPets />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/allPets"> */}
            <Route exact path="/allPets">
              <AllPets />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/getPets/:petID"> */}
            <Route exact path="/getPetsAdmin/:petID">
              <AdminMenuItem />
            </Route>
            {/* </PrivateRoute> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
