import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #FFFAFA;

    --pink-color-300: #FCE8E6; 
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-color);
    font-family: Poppins, sans-serif;
  }
`;

const Content = styled.div`
  max-width: 1140px;
  width: 85vw;
  margin: 0 auto;

`
 
export { GlobalStyle, Content };