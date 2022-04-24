import React from "react";
import styled from "styled-components";
import { purple } from "../../style-consts/colors";

const Container = styled.div`
  height: 160px;
  width: 352px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  background-color: #FFFFFFF;
  box-shadow: 0px 0px 50px 0px #0000000b;
  margin: 10px 30px 0 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buy = styled.span`
  color: ${purple};
  cursor: pointer;
`;

const Row = styled.div`
  margin: 0 auto;
`;

function BalancesCard() {
  return (
    <Container>
      <TopRow>
        <span>Account type</span>
        <Buy>Comprar</Buy>
      </TopRow>
      <Row>
        <span>image</span>
        <span> amount</span>
        <span> currency</span>
      </Row>
      <Row>
        <span>= currency</span>
        <span> amount</span>
      </Row>
    </Container>
  );
}

export default BalancesCard;
