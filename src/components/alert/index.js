import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import propTypes from "prop-types";

import { white, purple } from "../../style-consts/colors";
import * as Actions from "../../redux/actions";

const Container = styled.div`
  width: 300px;
  height: 100px;
  background-color: ${white};
  position: sticky;
  float: right;
  bottom: 20px;
  right: 20px;
  border: 1px solid black;
  border-radius: 5px;
  color: ${purple};
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    !props.visible || props.closed
      ? css`
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s linear 300ms, opacity 300ms;
        `
      : css`
          visibility: visible;
          opacity: 1;
          transition: visibility 0s linear 0s, opacity 300ms;
        `}
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: ${purple};
`;

function Alert({ error }) {
  const dispatch = useDispatch();
  const [closed, setClosed] = useState(false);

  const close = () => {
    setClosed(true);
    dispatch(Actions.setError(""));
  };

  useEffect(() => {
    setClosed(false);
  }, [error]);

  return (
    <Container visible={!!error} closed={closed}>
      <span>{error}</span>
      <CloseButton onClick={close}>X</CloseButton>
    </Container>
  );
}

Alert.propTypes = {
  error: propTypes.string,
};

Alert.defaultProps = {
  error: "",
};

export default Alert;
