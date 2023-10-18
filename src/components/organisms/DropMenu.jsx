import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SContainer = styled.div``;

const SMenuIcon = styled.i`
  cursor: pointer;
  margin-top: 16px;
`;

const SDropDownMenu = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  background-color: white;
  color: black;
  border-radius: 2px;
  box-shadow: 1px 1px 4px 1px #33333326;
`;
export const DropMenu = ({ menu }) => {
  const [showDropMenu, SetShowDropMenu] = useState(false);
  const onDisplaySwitch = () => SetShowDropMenu(!showDropMenu);
  return (
    <SContainer>
      <SMenuIcon className="fa fa-bars" onClick={onDisplaySwitch} />
      {showDropMenu && (
        <SDropDownMenu>
          <ul>
            {menu.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link to={menu.path} onClick={onDisplaySwitch}>
                    {menu.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </SDropDownMenu>
      )}
    </SContainer>
  );
};

DropMenu.propTypes = {
  menu: PropTypes.array,
};
