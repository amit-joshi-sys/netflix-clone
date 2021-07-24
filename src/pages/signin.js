import React, { useContext, useState } from "react";
import { FooterContainer } from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import * as Routes from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router";

export default function Signup() {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const [visible, setVisible] = useState(false);
  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setTimeout(() => {
          history.push(Routes.Browse);
        }, 2000);
        setVisible(false);
      })
      .catch((error) => {
        setPassword("");
        setEmailAddress("");
        setError(error.message);
        setVisible(true);
      });
    setTimeout(() => {
      setVisible((visible) => !visible);
    }, 2000);
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          {error && visible && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Title>Sign In</Form.Title>
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New Here? <Form.Link to={Routes.Sign_Up}>Sign Up Now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
