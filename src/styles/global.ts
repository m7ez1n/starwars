import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;  
  }

  body {
    .dark {
      --texts: #FFE300;
      --background: #1c1e22;
      --hoverEffect: #272b30;
    }

    .light {
      --texts: #000;
      --background: #f0f0f3;
      --hoverEffect: #ccc;
    }
  }
`;