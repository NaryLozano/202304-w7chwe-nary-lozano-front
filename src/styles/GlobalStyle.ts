import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
}

body {
  background-color: #fff;
  margin: 0;
}

h1,
h2,
h3,
p {
  margin: 0;
}

button {
  border: none;
  font: inherit;
  cursor: pointer;
}

input {
  font: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}
ul
{
list-style: none;
padding: 0;
margin: 0;
}
img {
  max-width: 100%;
}
`;

export default GlobalStyle;
