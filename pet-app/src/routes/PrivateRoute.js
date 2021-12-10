import react, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Context } from "../../Context";

export default function PrivateRoute({ children, ...rest }) {
  const { authenticated } = useContext(Context);
  return (
    <Route
      {...rest}
      render={() => {
        return authenticated ? (
          children
        ) : authenticated == null ? null : (
          <Redirect to="/auth" />
        );
      }}
    />
  );
}
// the children here is what we use when we wrap the private/public route around another component. We use the ...rest operator to treat the components we use as a regular route. So if we don't pass the ...rest then we won't be able to pass props the route needs such as the "to" prop

//if youre authenticated you would want to show the content of the private route. in this case the children is the content of the private route. 

// if authenticated is null, then it means the app hasnt determined if the user should be redirected on not yet, so you can return null for now which will shown an empty page

//if its false, then you're not authenticated and therefore do not belong in this route, so you'r redirected. 