import React, { useState, useContext } from "react";
import { Container, Input, Label, Button, Error } from "../Components";
import { useHistory, Link } from "react-router-dom";
import { firebase, UserContext } from "../Utils";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const loginHandler = () => {
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          setUser(user);
          if (user) {
            const localUser = JSON.stringify(user);
            localStorage.setItem("User", localUser);
          }
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
      <h2 style={{ textAlign: "center" }}>Login</h2>
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
        <div style={{ textAlign: "right" }}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button Color="#3414c0" onClick={() => history.push("/Signup")}>
            SignUp
          </Button>
          <Button Color="#3414c0" primary onClick={loginHandler}>
            Login
          </Button>
        </div>
      </Container>
    </>
  );
};
