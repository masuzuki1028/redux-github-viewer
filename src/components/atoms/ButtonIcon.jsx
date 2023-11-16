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

const SButtonNew = styled(SButton)`
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

const SButtonDelete = styled(SButton)`
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
  new: SButtonNew,
  delete: SButtonDelete,
};

export const ButtonIcon = ({ type }) => {
  // eslint-disable-next-line
  const StyledButton = map[type] || SButton;
  return (
    <>
      <StyledButton>{type}</StyledButton>
      {/* <SButtonDelete>{type}</SButtonDelete> */}
    </>
  );
};

ButtonIcon.propTypes = {
  type: PropTypes.string,
  // children: PropTypes.elementType,
};
