import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background-color: #fff;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #555;
    font-size: 15px;
    font-family: "Lato", sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Abel", sans-serif;
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
  /* Placeholder */
  ::-webkit-input-placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #116193;
    opacity: 1;
    /* Firefox */
  }

  :-ms-input-placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #116193;
    opacity: 1;
    /* Firefox */
  }

  ::-ms-input-placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #116193;
    opacity: 1;
    /* Firefox */
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #116193;
    opacity: 1;
    /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #116193;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #116193;
  }
`;
