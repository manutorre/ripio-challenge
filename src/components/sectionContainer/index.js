import React from "react";
import SectionHeader from "../sectionHeader";
import styled from "styled-components";
import { lightPurple } from "../../style-consts/colors";
import Totalizer from "../totalizer";
import Converter from "../converter";
import Balances from "../balances";
import Movements from "../movements";
import { useSelector } from "react-redux";
import { purple } from "../../style-consts/colors";

const Container = styled.div`
  background-color: ${lightPurple};
  padding: 0 33px;
  min-width: 0;
  width: 100%;
`;

const Spinner = styled.div`
  margin: auto auto;
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: ${purple} transparent ${purple} transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function SectionContainer() {
  const { success } = useSelector((state) => state.remote);
  if (success) {
    return (
      <Container>
        <SectionHeader
          title={"Mi billetera"}
          subtitle={
            "En tu billetera vas a poder almacenar todas tus criptomonedas que compres en Ripio"
          }
        >
          <Totalizer />
        </SectionHeader>
        <Converter />
        <Balances />
        <Movements />
      </Container>
    );
  } else if (success === null) {
    return <Spinner />;
  }
  return "There was an error fetching the data";
}

export default SectionContainer;
