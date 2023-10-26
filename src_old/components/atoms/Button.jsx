import React from "react";
import styled from "styled-components";

const SButton = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
`;

const SNewButton = styled(SButton)`
  background: #42c360;
  border-bottom: 2px solid #28a745;

  &:hover {
    background: #28a745;
    border-bottom: 2px solid #208437;
  }

  &:active {
    border-bottom: 0;
  }
`;

const SDeleteButton = styled(SButton)`
  background: #d73a49;
  border-bottom: 2px solid #af1c2a;
  &:hover {
    background: #af1c2a;
    border-bottom: 2px solid #671019;
  }

  &:active {
    border-bottom: 0;
  }
`;

export const Button = () => {
  return (
    <>
      <SNewButton>NewButton</SNewButton>
      <SDeleteButton>DeleteButton</SDeleteButton>
    </>
  );
};
