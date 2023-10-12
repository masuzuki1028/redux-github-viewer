import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SContainer>
      <SLogo>
        <Link to="/">
          <h1>Github Viewer</h1>
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
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  background-color: black;
`;

const SLogo = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
`;

const SNavi = styled.ul`
  display: flex;
  padding: 0px 32px;
  li {
    margin-right: 16px;
  }
  li a {
    color: white;
    text-decoration: none;
  }
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
