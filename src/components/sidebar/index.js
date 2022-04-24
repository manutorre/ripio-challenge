import React from "react";
import styled, { css } from "styled-components";
import { purple, lightGrey } from "../../style-consts/colors";

const SidebarContainer = styled.div`
  height: 100%;
  width: 260px;
  flex-shrink: 0;
  background-color: #fffffff;
`;

const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;

  ${(props) =>
    props.selected &&
    css`
      border-left: 3px solid ${purple};
      font-weight: bold;
    `};

  &:hover {
    background-color: ${lightGrey};
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarOptions>
        <Option selected>Panel</Option>
        <Option>Panel</Option>
        <Option>Panel</Option>
        <Option>Panel</Option>
      </SidebarOptions>
    </SidebarContainer>
  );
}

export default Sidebar;
