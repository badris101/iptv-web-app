import { createGlobalStyle } from "styled-components";
import MontserratRegular from "iptv-ui-kit/assets/Fonts/Montserrat-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat-Regular';
    src: local('Montserrat-Regular'), local('Montserrat-Regular'),
    url(${MontserratRegular}) format('ttf');
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(89.8deg, #141E30 0.17%, #243B55 99.83%);
    font-family: Montserrat-Regular;
    color: white;
  }
`;

export default GlobalStyle;
