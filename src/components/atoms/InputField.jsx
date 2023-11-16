import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
  width: 100%;
`;

const SInputField = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

export const InputField = () => {
  return (
    <SContainer>
      <SInputField />
    </SContainer>
  );
};
