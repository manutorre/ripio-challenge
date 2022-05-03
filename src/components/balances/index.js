import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import BalancesCard from "../balancesCard";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  margin-top: 65px;
`;

function Balances() {
  const { user_currencies: userCurrencies } = useSelector(
    (state) => state.metadata
  );
  return (
    <Container>
      {Object.keys(userCurrencies).map((cur, i) => (
        <BalancesCard key={i} ticker={cur} amount={userCurrencies[cur]} />
      ))}
    </Container>
  );
}

export default Balances;
