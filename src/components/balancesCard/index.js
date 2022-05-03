import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import propTypes from "prop-types";

import { purple, white } from "../../style-consts/colors";
import ImgLogo from "../../images/default_img.png";

const Container = styled.div`
  height: 160px;
  width: 352px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  background-color: ${white};
  box-shadow: 0px 0px 50px 0px #0000000b;
  margin: 10px 30px 0 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  animation: 1s linear fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
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

const MiddleRow = styled.div`
  margin: 0 auto;
  font-size: 32px;
`;

const CurrencyImage = styled.img`
  height: 35px;
  vertical-align: bottom;
`;

function BalancesCard({ ticker, amount }) {
  const { local_currency: localCurrency } = useSelector(
    (state) => state.metadata
  );
  const { currencies, rates } = useSelector((state) => state.remote);
  const currency = currencies.find((cur) => cur.ticker === ticker);
  const { sell_rate } =
    rates.find((rate) => rate.ticker === `${ticker}_${localCurrency.ticker}`) ||
    0;
  return (
    <Container>
      <TopRow>
        <span>{`Cuenta ${currency.name}`}</span>
        <Buy>Comprar</Buy>
      </TopRow>
      <MiddleRow>
        <CurrencyImage
          height={35}
          src={currency.url_images.image_png}
          onError={(e) => (e.target.src = ImgLogo)}
        />
        <span>
          {" "}
          {amount.toLocaleString("es-AR", { maximumFractionDigits: 2 })}
        </span>
        <span> {ticker}</span>
      </MiddleRow>
      <Row>
        <span>{`= ${localCurrency.ticker}${localCurrency.symbol} ${(
          sell_rate * amount
        ).toLocaleString("es-AR", { maximumFractionDigits: 2 })}`}</span>
      </Row>
    </Container>
  );
}

BalancesCard.propTypes = {
  ticker: propTypes.string,
  amount: propTypes.number,
  imgUrl: propTypes.string,
};

export default BalancesCard;
