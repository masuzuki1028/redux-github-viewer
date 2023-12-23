import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { colors } from "../../styles/constants";

const SContainer = styled.tr`
  cursor: pointer;

  &:hover {
    background: ${colors.hoverRow};
  }
`;

const STableCell = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid ${colors.border};

  &:first-child {
    min-width: auto;
  }
`;
const Status = {
  0: "open",
  1: "close",
};

export const IssueItem = ({ item, onClickCheckBox, checked, onRowClick }) => {
  const status = Status[item.status];
  const now = dayjs().format("MM-DD-YYYY");

  return (
    <SContainer key={item.id}>
      <STableCell>
        <input
          type="checkbox"
          checked={checked}
          onChange={onClickCheckBox}
        ></input>
      </STableCell>
      <STableCell onClick={onRowClick}>{item.title}</STableCell>
      <STableCell onClick={onRowClick}>{status}</STableCell>
      <STableCell onClick={onRowClick}></STableCell>
      <STableCell onClick={onRowClick}>{now}</STableCell>
      <STableCell onClick={onRowClick}>{now}</STableCell>
    </SContainer>
  );
};

IssueItem.propTypes = {
  item: PropTypes.object,
  checked: PropTypes.bool,
  onClickCheckBox: PropTypes.func,
  onRowClick: PropTypes.func,
};
