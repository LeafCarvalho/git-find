import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    all: unset;
    background-color: #24292e;
    background-image: linear-gradient(-45deg, #24292e 25%, transparent 25%, transparent 50%, #364a15 50%, #364a15 75%, transparent 75%, transparent);
    background-size: 10px 10px;
  }
`;

export default GlobalStyle;
