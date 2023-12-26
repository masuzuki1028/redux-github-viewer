import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/constants";
import { DropDown } from "./DropDown";

const SContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(51, 51, 51);
  color: ${colors.white};
`;

const SLogo = styled.div``;

const SLogoLink = styled(Link)`
  color: ${colors.white};
`;

const SNavi = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;
`;

const SNavList = styled.li`
  margin-right: 16px;
`;

const SNavListLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.1rem;
`;

const SMenu = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`;
const STitle = styled.h1`
  white-space: nowrap;
`;

export const Header = () => {
  return (
    <SContainer>
      <SLogo>
        <SLogoLink to="/">
          <STitle>Github Viewer</STitle>
        </SLogoLink>
      </SLogo>
      <SNavi>
        <SNavList>
          <SNavListLink to="/issue">Issue</SNavListLink>
        </SNavList>
        <SNavList>
          <SNavListLink to="/pull-request">Pull Request</SNavListLink>
        </SNavList>
      </SNavi>
      <SMenu>
        <DropDown />
      </SMenu>
    </SContainer>
  );
};
