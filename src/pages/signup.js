import React, { useContext, useState } from "react";
import { FooterContainer } from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import * as Routes from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setTimeout(() => {
              history.push(Routes.Browse);
            }, 2000);
          });
      })
      .catch((error) => {
        setFirstName("");
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
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Title>Sign Up</Form.Title>
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Let's Start The Journey
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Alredy A User?{" "}
            <Form.Link to={Routes.Sign_In}>Sign In Here.</Form.Link>
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
