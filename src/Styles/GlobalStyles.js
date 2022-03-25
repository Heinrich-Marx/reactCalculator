import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  header {
    background-color: ${({ theme }) => theme.header} !important;
  }
  a {
    color: ${({ theme }) => theme.text} !important;
  }
  div {
    border-color:  ${({ theme }) => theme.borderColor} !important;
  }
  p {
    background-color: ${({ theme }) => theme.body} !important;
      &: hover { 
        background-color: ${({ theme }) => theme.buttonBg} !important;
      }
  }
  button {
    border-color:  ${({ theme }) => theme.borderColor} !important;
    color: ${({ theme }) => theme.text} !important;
    background: ${({ theme }) => theme.body};
    &: hover { 
      background-color: ${({ theme }) => theme.buttonBg} !important;
    }
  }
  `;
