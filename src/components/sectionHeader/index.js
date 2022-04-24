import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 115px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 100px;
  align-items: flex-start;
`;

const Title = styled.h2`
  margin: 5px 0;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-left: 5px;
`;

function SectionHeader({ title, subtitle, children }) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <span>{subtitle}</span>
      </TitleContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.object,
};

export default SectionHeader;
