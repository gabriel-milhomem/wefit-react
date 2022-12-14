import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-weight: 700;
    font-family: 'Open Sans';
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }

  button {
    border: 0;
    color: inherit;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`
