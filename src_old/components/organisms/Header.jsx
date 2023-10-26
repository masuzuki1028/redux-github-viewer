import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DropMenu } from "./DropMenu";

const SContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
`;

const SLogo = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
`;

const SMenu = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`;

const SNavi = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;
  li {
    margin-right: 16px;
  }
  li > a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

const STitle = styled.h1`
  white-space: nowrap;
`;

const LinkItems = [
  {
    id: 1,
    path: "/issue",
    text: "Issue",
  },
  {
    id: 2,
    path: "/pull-request",
    text: "Pull Request",
  },
];

const MenuItems = [
  {
    id: 1,
    path: "/",
    text: "Top",
  },
  {
    id: 2,
    path: "/profile",
    text: "Your Profile",
  },
  {
    id: 3,
    path: "/issue",
    text: "Issue",
  },
  {
    id: 4,
    path: "/pull-request",
    text: "Pull Request",
  },
];

export const Header = () => {
  return (
    <SContainer>
      <SLogo>
        <Link to="/">
          <STitle>Github Viewer</STitle>
        </Link>
      </SLogo>
      <SNavi>
        {LinkItems.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          );
        })}
      </SNavi>
      <SMenu>
        <DropMenu menu={MenuItems} />
      </SMenu>
    </SContainer>
  );
};
