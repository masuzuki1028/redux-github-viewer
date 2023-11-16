import React from "react";
import PropTypes from "prop-types";
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

const SButtonPrimary = styled(SButton)`
  background: rgb(66, 195, 96);
  border-bottom: 2px solid #28a745;

  &:hover {
    background: #28a745;
    border-bottom: 2px solid #208437;
  }

  &:active {
    border-bottom: 0;
  }
`;

const SButtonDanger = styled(SButton)`
  background: rgb(215, 58, 73);
  border-bottom: 2px solid #af1c2a;
  &:hover {
    background: #af1c2a;
    border-bottom: 2px solid #671019;
  }

  &:active {
    border-bottom: 0;
  }
`;

const map = {
  default: SButton,
  new: SButtonPrimary,
  delete: SButtonDanger,
};

export const Button = ({ variant }) => {
  const StyledButton = map[variant] || SButton;
  return <StyledButton>{variant}</StyledButton>;
};

Button.propTypes = {
  variant: PropTypes.string,
};