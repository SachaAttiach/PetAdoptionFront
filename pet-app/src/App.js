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
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextProvider from "./Context";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <PublicRoute exact path="/register">
              <Route exact path="/register">
                <Register />
              </Route>
            </PublicRoute>
            <PublicRoute exact path="/dashboard">
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
            </PublicRoute>
            <PrivateRoute exact path="/">
              <Route exact path="/">
                <Home />
              </Route>
            </PrivateRoute>
            <PublicRoute exact path="/landing">
              <Route exact path="/landing">
                <Landing />
              </Route>
            </PublicRoute>
            <PrivateRoute exact path="/menu">
              <Route exact path="/menu">
                <Menu />
              </Route>
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Route exact path="/profile">
                <Profile />
              </Route>
            </PrivateRoute>
            <PublicRoute exact path="/usersettings">
              <Route exact path="/usersettings">
                <UserSettings />
              </Route>
            </PublicRoute>
            <PrivateRoute exact path="/addpet">
              <Route exact path="/addpet">
                <AddPet />
              </Route>
            </PrivateRoute>
            <PrivateRoute exact path="/getPets/:petID">
              <Route exact path="/getPets/:petID">
                <MenuItem />
              </Route>
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
