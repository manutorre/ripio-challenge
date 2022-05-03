import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Quantiy = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
const Currency = styled.span`
  font-weight: 100;
`;

function Totalizer() {
  const { local_currency: localCurrency, user_currencies: userCurrencies } =
    useSelector((state) => state.metadata);
  const { rates } = useSelector((state) => state.remote);
  const totalizer = Object.keys(userCurrencies).reduce((acc, cur) => {
    const rate = rates.find(
      (rate) => rate.ticker === `${cur}_${localCurrency.ticker}`
    );
    acc += rate ? rate.sell_rate * userCurrencies[cur] : 0;
    return acc;
  }, 0);

  return (
    <div>
      <Quantiy>{`${localCurrency.symbol} ${totalizer.toLocaleString(
        "es-AR"
      )}`}</Quantiy>
      <Currency> {localCurrency.ticker}</Currency>
    </div>
  );
}

export default Totalizer;
