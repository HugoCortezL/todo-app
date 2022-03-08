import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 13px; 
        font-family: "Fredoka", sans-serif;
        -webkit-font-smoothing: antialiased !important;
    }
`