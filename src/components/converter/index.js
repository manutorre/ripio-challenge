import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Actions from "../../redux/actions";
import { purple, lightPurple } from "../../style-consts/colors";
import ArrowImg from "../../images/converter-arrow.png";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Currency = styled.select`
  font-size: 40px;
  font-weight: bold;
  outline: none;
  border: 0px;
  text-align: center;
  background-color: ${lightPurple};
`;
const Amount = styled.input`
  font-size: 40px;
  border: 0px;
  border-bottom: 1px solid ${purple};
  min-width: 100px;
  max-width: 250px;
  margin: 0 20px;
  background-color: ${lightPurple};
  &:focus-visible {
    outline: none;
  }
`;

const AmountSpan = styled.span`
  font-size: 40px;
  border: 0px;
  border-bottom: 1px solid ${purple};
  min-width: 100px;
  max-width: 250px;
  margin: 0 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:focus-visible {
    outline: none;
  }
`;

const Button = styled.button`
  width: 240px;
  height: 44px;
  background-color: ${purple};
  border-radius: 22px;
  color: white;
  cursor: pointer;
`;

function Converter() {
  const dispatch = useDispatch();
  const { currencies, rates } = useSelector((state) => state.remote);
  const { user_currencies: userCurrencies, local_currency: localCurrency } =
    useSelector((state) => state.metadata);
  const [from, setFrom] = useState(Object.keys(userCurrencies)[0]);
  const [fromValue, setFromValue] = useState(0);
  const [to, setTo] = useState(currencies[2].ticker);
  const [calculated, setCalculated] = useState(0);

  const calculate = (e) => {
    //get sell rate of the currency we will sell to the local currency of user
    const fromRate = rates.find(
      (r) => r.ticker === `${from}_${localCurrency.ticker}`
    ).sell_rate;
    //if triggered by value change, we update the fromValue
    if (e && e.target.value) setFromValue(e.target.value);
    const currentValue = e ? e.target.value : fromValue ? fromValue : 0;
    //in case we are converting to local currency, dont need to look for buy_rate
    if (to === localCurrency.ticker) {
      setCalculated(fromRate * currentValue);
    } else {
      const toRate = rates.find(
        (r) => r.ticker === `${to}_${localCurrency.ticker}`
      ).buy_rate;
      //update the calculated value to convert
      setCalculated((fromRate * currentValue) / toRate);
    }
  };

  const convert = () => {
    const fromRate = rates.find(
      (cur) => cur.ticker === `${from}_${localCurrency.ticker}`
    );
    dispatch(Actions.convert(from, to, fromValue, calculated, fromRate));
  };

  useEffect(() => {
    calculate();
  }, [from, to]);

  return (
    <Container>
      <Currency
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
        }}
      >
        {Object.keys(userCurrencies).map(
          (cur) =>
            cur !== localCurrency.ticker &&
            cur !== to && (
              <option key={cur} value={cur}>
                {cur}
              </option>
            )
        )}
      </Currency>
      <Amount defaultValue={0} type="number" onChange={calculate} />
      <img height={40} src={ArrowImg} />
      <Currency
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      >
        {currencies.map(
          (cur) =>
            cur.ticker !== from &&
            cur.ticker !== localCurrency.ticker && (
              <option key={cur.ticker} value={cur.ticker}>
                {cur.ticker}
              </option>
            )
        )}
      </Currency>
      <AmountSpan>
        {calculated.toLocaleString("es-AR", { maximumFractionDigits: 2 })}
      </AmountSpan>
      <Button onClick={convert}>Convertir</Button>
    </Container>
  );
}

export default Converter;
