import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <AppBody>
          <SideBar />
          <Routes></Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
`;
