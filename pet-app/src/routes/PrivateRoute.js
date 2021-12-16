import react, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Context } from "../Context";

export default function PrivateRoute({ children, ...rest }) {
  const { authenticated } = useContext(Context);
  return (
    <Route
      {...rest}
      render={() => {
        return authenticated ? (
          children
        ) : authenticated == null ? null : (
          <Redirect to="/landing" />
        );
      }}
    />
  );
}
