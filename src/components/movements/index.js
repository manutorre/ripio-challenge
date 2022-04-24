import React from "react";
import styled, { css } from "styled-components";
import { white } from "../../style-consts/colors";

const Container = styled.div`
  margin-top: 65px;
  width: 100%;
  margin-bottom: 65px;
`;

const Title = styled.h4`
  float: left;
`;

const MovementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Movement = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  font-weight: 400;
  width: 100%;
  justify-content: space-evenly;
  text-align: left;
  background-color: ${white};
  align-items: center;
  ${(props) =>
    props.header &&
    css`
      font-weight: 100;
    `};
`;

const MovementCell = styled.div`
  text-align: justify;
  width: 100%;
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
`;

function Movements() {
  return (
    <Container>
      <Title>Mis movimientos</Title>
      <MovementsContainer>
        <Movement header>
          <MovementCell>Fecha</MovementCell>
          <MovementCell>Tipo operación</MovementCell>
          <MovementCell>Método</MovementCell>
          <MovementCell>Estado</MovementCell>
          <MovementCell>Comisión</MovementCell>
          <MovementCell>Monto</MovementCell>
        </Movement>
        <Movement>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
        </Movement>
        <Movement>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
        </Movement>
        <Movement>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
          <MovementCell>text</MovementCell>
        </Movement>
      </MovementsContainer>
    </Container>
  );
}

export default Movements;
