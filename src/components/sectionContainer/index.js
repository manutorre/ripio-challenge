import React from "react";
import SectionHeader from "../sectionHeader";
import styled from "styled-components";
import { lightPurple } from "../../style-consts/colors";
import Totalizer from "../totalizer";
import Converter from "../converter";
import Balances from "../balances";
import Movements from "../movements";

const Container = styled.div`
  background-color: ${lightPurple};
  padding: 0 33px;
  min-width: 0;
  width: 100%;
`;

function SectionContainer() {
  return (
    <Container>
      <SectionHeader
        title={"Header"}
        subtitle={"This is a subtitle for the title"}
      >
        <Totalizer />
      </SectionHeader>
      <Converter />
      <Balances />
      <Movements />
    </Container>
  );
}

export default SectionContainer;
