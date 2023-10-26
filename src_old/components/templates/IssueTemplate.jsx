import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

const SContainer = styled.div`
  padding: 16px;
  margin-top: 256px;

  h1 {
    text-align: center;
  }
`;

export const IssueTemplate = () => {
  return (
    <SContainer>
      <h1>Issue</h1>
      <Button />
    </SContainer>
  );
};
