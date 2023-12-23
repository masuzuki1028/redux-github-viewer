import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/constants";

const SContainer = styled.div``;

const SMenuIcon = styled.i`
  cursor: pointer;
`;

const SDropDownMenu = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: ${colors.white};
  color: black;
  box-shadow: 1px 1px 4px 1px #33333326;
`;

const SMenuList = styled.ul`
  padding: 0;
  margin: 0;
`;

const SMenuItem = styled.li`
  padding: 0;
`;

const SMenuItemLink = styled(Link)`
  display: block;
  color: ${colors.black};
  padding: 8px;
  font-size: 1rem;

  &:hover {
    background: ${colors.hoverRow};
    color: ${colors.white};
  }
`;

export const DropDown = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const onDisplaySwitch = () => setShowDropMenu(!showDropMenu);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      console.log(e.target);
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDropMenu(false);
      }
    };
    if (showDropMenu) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showDropMenu]);

  return (
    <SContainer>
      <SMenuIcon className="fa fa-bars" onClick={onDisplaySwitch} />
      {showDropMenu && (
        <SDropDownMenu ref={dropDownRef}>
          <SMenuList>
            <SMenuItem>
              <SMenuItemLink to="/" onClick={onDisplaySwitch}>
                Top
              </SMenuItemLink>
            </SMenuItem>
            <SMenuItem>
              <SMenuItemLink to="/profile" onClick={onDisplaySwitch}>
                Your Profile
              </SMenuItemLink>
            </SMenuItem>
            <SMenuItem>
              <SMenuItemLink to="/issue" onClick={onDisplaySwitch}>
                Issue
              </SMenuItemLink>
            </SMenuItem>
            <SMenuItem>
              <SMenuItemLink to="/pull-request" onClick={onDisplaySwitch}>
                Pull Request
              </SMenuItemLink>
            </SMenuItem>
          </SMenuList>
        </SDropDownMenu>
      )}
    </SContainer>
  );
};
