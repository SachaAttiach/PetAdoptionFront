import react, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Context";

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
