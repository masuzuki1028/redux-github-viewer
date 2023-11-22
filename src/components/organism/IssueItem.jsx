import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const SContainer = styled.tr`
  cursor: pointer;

  &:hover {
    background: #c6dae640;
  }
`;

const Status = {
  0: "open",
  1: "close",
};

export const IssueItem = (props) => {
  const { item, onChange, checked, onRowClick } = props;
  const status = Status[item.status];
  const now = dayjs().format("MM-DD-YYYY");

  return (
    <SContainer key={item.id} onClick={onRowClick}>
      <td>
        <input type="checkbox" checked={checked} onChange={onChange}></input>
      </td>
      <td>{item.title}</td>
      <td>{status}</td>
      <td></td>
      <td>{now}</td>
      <td>{now}</td>
    </SContainer>
  );
};

IssueItem.propTypes = {
  item: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onRowClick: PropTypes.func,
};
