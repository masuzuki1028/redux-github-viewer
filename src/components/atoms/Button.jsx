import React from "react";
import PropTypes from "prop-types";

export const Button = ({ type, children }) => {
  const className = `button ${type}`;
  return <button className={className}>{children}</button>;
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.elementType,
};
