import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../styles/constants";

const SContainer = styled.div``;

const STabs = styled.ul`
  display: flex;
`;

const STabIcon = styled.span`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;

const activeStyle = `1px solid ${colors.border}`;

const STab = styled.li`
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  border-radius: 6px 6px 0px 0px;
  border-top: ${({ active }) => (active ? activeStyle : "")};
  border-right: ${({ active }) => (active ? activeStyle : "")};
  border-left: ${({ active }) => (active ? activeStyle : "")};
  border-bottom: ${({ active }) => (active ? "" : activeStyle)};
`;

export const TabHeader = ({ tabs, selected, onChange }) => {
  return (
    <SContainer>
      <STabs>
        {tabs.map((tab) => {
          const active = tab.key === selected;
          const onClick = () => onChange(tab.key);
          return (
            <STab active={active} key={tab.key}>
              <STabIcon onClick={onClick}>{tab.text}</STabIcon>
            </STab>
          );
        })}
      </STabs>
    </SContainer>
  );
};

TabHeader.propTypes = {
  tabs: PropTypes.array,
  selected: PropTypes.string,
  onChange: PropTypes.func,
};
