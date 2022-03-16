import React, { useState } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, googleProvider } from "../firebase";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleProvider).catch((error) => {
      alert(error.message);
    });
  };
  const signInWithEmailAndPassword = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <h1>Chat'n lot</h1>
        <form>
          <input
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button type="submit" onClick={signInWithEmailAndPassword}>Sign In</Button>
        </form>
        <p>or</p>
        <Button onClick={signInWithGoogle}>Sign In with Google</Button>
        <Link to="/sign-up">Doesn't have an account? Sign Up</Link>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: var(--chat-background);
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 100px 80px 100px;
  text-align: center;
  background-color: var(--chat-color);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > button {
    margin-top: 30px;
    text-transform: inherit !important;
    background-color: var(--chat-background) !important;
    color: white;
  }
  > h1 {
    color: white;
  }
  > form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    > input {
      border: none;
      border-radius: 5px;
      margin-bottom: 10px;
      height: 35px;
      outline: none;
      color: var(--chat-color);
      padding-left: 5px;
      ::placeholder {
        padding-left: 5px;
        color: var(--chat-color);
        font-size: 18px;
      }
    }

    > button {
      text-transform: inherit !important;
      background-color: var(--chat-background) !important;
      color: white;
    }
  }
  > p {
    padding-top: 20px;
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
  > a {
    margin-top: 30px;
    color: white;
  }
`;
