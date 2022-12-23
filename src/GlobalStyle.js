import { createGlobalStyle } from "styled-components";
import colors from './utils/colors';

const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${colors.BACKGROUND};
    overflow-x: hidden;

    color: ${colors.FONT};
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.BLACK};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.BLACK};
  }

  .mt-15 {
    margin-top: 15px;
  }

  .mb-15 {
    margin-bottom: 15px;
  }

  .mb-5 {
    margin-bottom: 5px;
  }

  .mr-15 {
    margin-right: 15px;
  }

  .mr-10 {
    margin-right: 10px;
  }

  .mr-5 {
    margin-right: 5px;
  }

  .ml-15 {
    margin-left: 15px;
  }

  .pt-15 {
    padding-top: 15px;
  }

  .pb-15 {
    padding-bottom: 15px;
  }
`;

export default GlobalStyle;
