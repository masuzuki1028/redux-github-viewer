import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  padding: 16px;
  margin-top: 128px;
`;

const STitle = styled.h1`
  text-align: center;
`;

export const PullRequestPage = () => {
  return (
    <SContainer>
      <STitle>PullRequest</STitle>
    </SContainer>
  );
};
