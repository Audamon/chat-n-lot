import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <AppBody>
          <SideBar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/chat" exact element={<Chat/>} />
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`;
