import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import SectionContainer from "./components/sectionContainer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Sidebar />
        <SectionContainer />
      </Container>
    </div>
  );
}

export default App;
