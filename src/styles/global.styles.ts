import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (min-width: 1080px) {
    html {
      font-size: 48px;
    }
  }

  @media (max-width: 1085px) {
    html {
      font-size: 32px;
    }
  }

  @media (max-width: 730px) {
    html {
      font-size: 24px;
    }
  }

  @media (max-width: 560px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 340px) {
    html {
      font-size: 11px;
    }
  }

  body {
    cursor: arrow;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }  
`;
