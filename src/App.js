import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Spinner from "react-spinkit";
import Profile from "./components/Profile";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <h1>Chat'n lot</h1>
          <Spinner name="ball-spin-fade-loader" color="#0A8785" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        ) : (
          <>
            <Header />
            <AppBody>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/chat" exact element={<Chat />} />
                <Route path="/profile" exact element={<Profile />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--chat-background);
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    color: white;
    margin-bottom: 40px;
  }
`;
