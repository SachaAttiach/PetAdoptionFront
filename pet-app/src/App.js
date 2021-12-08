import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context } from "./Context";
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
            <Route exact path="/about">
              <About />
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
