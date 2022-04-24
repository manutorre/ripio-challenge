import React from "react";
import styled from "styled-components";
import Logo from "../../images/logo.png";
import FaqImg from "../../images/FAQ.png";
import UserImg from "../../images/user.png";
import BellImg from "../../images/bell.png";
import { lightPurple } from "../../style-consts/colors";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: ${lightPurple};
`;

const LogoImg = styled.img`
  height: 35px;
  display: block;
  box-sizing: border-box;
`;

const IconImg = styled.img`
  height: 30px;
  margin: 0 10px;
`;

/* const IconsContainer = styled.div``; */

function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} />
      <div>
        <IconImg src={FaqImg} />
        <IconImg src={BellImg} />
        <IconImg src={UserImg} />
      </div>
    </HeaderContainer>
  );
}

export default Header;
