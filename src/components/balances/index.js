import React from "react";
import styled from "styled-components";
import BalancesCard from "../balancesCard";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  margin-top: 65px;
`;

function Balances() {
  return (
    <Container>
      <BalancesCard />
      <BalancesCard />
      <BalancesCard />
      <BalancesCard />
    </Container>
  );
}

export default Balances;
