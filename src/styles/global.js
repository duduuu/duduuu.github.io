import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fff;
    color: #333;
  }

  h1, h2, h3 {
    color: #007bff;
  }
`;

export default GlobalStyle;
