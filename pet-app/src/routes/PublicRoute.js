import react, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../Context";

export default function PublicRoute({ children, ...rest }) {
  const { authenticated } = useContext(Context);
  return (
    <Route
      {...rest}
      render={() => {
        return authenticated ? <Redirect to="/" /> : children;
      }}
    />
  );
}
// and the public route is saying if its authenticated, redirect to home, otherwise, return the child thats inside there, which is the login page