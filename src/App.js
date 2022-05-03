import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./redux/actions";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import SectionContainer from "./components/sectionContainer";
import Alert from "./components/alert";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding-bottom: 150px;
`;

function App() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.metadata);
  useEffect(() => {
    dispatch(Actions.getRemoteData());
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <Sidebar />
        <SectionContainer />
      </Container>
      <Alert error={error} />
    </div>
  );
}

export default App;
