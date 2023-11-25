import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import EliceDXNeolliBold from '../assets/fonts/EliceDXNeolliBold.ttf';
import EliceDXNeolliLight from '../assets/fonts/EliceDXNeolliLight.ttf';
import EliceDXNeolliMedium from '../assets/fonts/EliceDXNeolliMedium.ttf';

const GlobalStyle = createGlobalStyle`

    ${reset}

    @font-face {
    font-family: 'EliceDXNeolli';
    src: url(${EliceDXNeolliMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    }

    @font-face {
    font-family: 'EliceDXNeolli';
    src: url(${EliceDXNeolliBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    }

    @font-face {
    font-family: 'EliceDXNeolli';
    src: url(${EliceDXNeolliLight}) format('truetype');
    font-weight: 400;
    font-style: normal;
    }

    
    

    *{
        box-sizing: border-box;
        margin: 0;
    }

    html,
    body {
        font-family: 'EliceDXNeolli', sans-serif;
        font-size: 62.5%;
    }

    body {
        
        padding: 0 auto;
      }
    
      a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
      }
    
      button {
        border: none;
        background: none;
        cursor: pointer;
        font: inherit;
      }
    
      select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
      }
`;

export default GlobalStyle;
