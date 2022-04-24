import React from "react";
import styled from "styled-components";

const Quantiy = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
const Currency = styled.span`
  font-weight: 100;
`;

function Totalizer() {
  return (
    <div>
      <Quantiy>$238913</Quantiy>
      <Currency>ARS</Currency>
    </div>
  );
}

export default Totalizer;
