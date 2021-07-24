import React from "react";
import * as Routes from "./constants/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import { IsUserRedirect, ProtectectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  // console.log(user);
  return (
    <Router>
      <IsUserRedirect
        path={Routes.Sign_In}
        user={user}
        loggedInPath={Routes.Browse}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        path={Routes.Sign_Up}
        user={user}
        loggedInPath={Routes.Browse}
      >
        <Signup />
      </IsUserRedirect>
      <ProtectectedRoute user={user} path={Routes.Browse}>
        <Browse />
      </ProtectectedRoute>
      <IsUserRedirect
        exact
        path={Routes.Home}
        user={user}
        loggedInPath={Routes.Browse}
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
