import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const signUp = (e) => {
    if (password !== confirmPassword) {
      return alert("The passwords need to be equal!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth.currentUser
          .updateProfile({
            displayName: userName,
          })
          .then(() => {
            auth.currentUser.reload().then(() => {
              navigate("/");
            });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          return alert("The password is too weak.");
        } else if (errorMessage) {
          return alert(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <SignupContainer>
      <SignupInnerContainer>
        <h1>Chat'n lot</h1>
        <form>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <Button onClick={signUp}>Sign Up</Button>
        </form>
        <Link to="/">Already has an account? Log In</Link>
      </SignupInnerContainer>
    </SignupContainer>
  );
}

export default SignUp;

const SignupContainer = styled.div`
  background-color: var(--chat-background);
  height: 100vh;
  display: grid;
  place-items: center;
`;
const SignupInnerContainer = styled.div`
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
