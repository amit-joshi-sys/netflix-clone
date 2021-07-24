import React from "react";
import { Header } from "../components";
import * as Routes from "../constants/routes";
import logo from "../logo.svg";
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={Routes.Home} alt="Netflix" src={logo} />
        <Header.ButtonLink to={Routes.Sign_In}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
