import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2rem;
    padding: 0px;
    margin: 0px;
  }

  ul, p {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${colors.link};
  }

`;
