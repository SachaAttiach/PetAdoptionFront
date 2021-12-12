import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UserSettings from "./pages/UserSettings";
import AddPet from "./pages/AddPet";
import MenuItem from "./components/MenuItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextProvider from "./Context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/menu">
              <Menu />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/usersettings">
              <UserSettings />
            </Route>
            <Route exact path="/addpet">
              <AddPet />
            </Route>
            <Route exact path="/getPets/:petID">
              <MenuItem />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
