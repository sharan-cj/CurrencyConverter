import React, { useState, useContext } from "react";
import { Container, Input, Label, Error, Button } from "../Components";
import { useHistory } from "react-router-dom";
import { firebase, UserContext } from "../Utils";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMissmatchError, setPasswordMissmatchError] = useState(false);
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const confirmPasswordValidation = (e: any) => {
    if (e.target.value !== password) {
      setPasswordMissmatchError(true);
    } else {
      setPasswordMissmatchError(false);
    }
  };

  const signUpHandler = () => {
    setErrorMessage("");
    if (email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          setUser(user);
          history.push("/");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Required to fill all the inputs.");
    }
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Signup</h2>
      <Container width="600px">
        {errorMessage && <Error>{errorMessage}</Error>}
        <Label>Email</Label>
        <Input
          type="email"
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Label>Password</Label>
        <Input
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <Label>Confirm Password</Label>
        <Input
          type="password"
          onChange={confirmPasswordValidation}
          placeholder="Enter password"
        />
        {passwordMissmatchError && <Error>Password do not match.</Error>}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button Color="#3414c0" onClick={() => history.push("/Login")}>
            Login
          </Button>
          <Button Color="#3414c0" primary onClick={signUpHandler}>
            Create Account
          </Button>
        </div>
      </Container>
    </>
  );
};
