import React from "react";
import styled from "styled-components";
import { purple } from "../../style-consts/colors";
import ArrowImg from "../../images/converter-arrow.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Currency = styled.span`
  font-size: 40px;
  font-weight: bold;
`;
const Amount = styled.span`
  font-size: 40px;
  border-bottom: 1px solid ${purple};
`;

const Button = styled.button`
  width: 240px;
  height: 44px;
  background-color: ${purple};
  border-radius: 22px;
  color: white;
  cursor: pointer;
`;

const Arrow = styled.img`
  height: 40px;
`;

function Converter() {
  return (
    <Container>
      <Currency>BTC</Currency>
      <Amount>123</Amount>
      <Arrow src={ArrowImg}></Arrow>
      <Currency>ETH</Currency>
      <Amount>213</Amount>
      <Button>Convertir</Button>
    </Container>
  );
}

export default Converter;
