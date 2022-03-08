import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --dark-blue: #00204a;
        --blue: #005792;
        --light-blue: #00BBF0;
        --white-blue: #EFFBFF;
        --white: #FFFFFF;
        --red: #F8333C;
        --green: #44AF69;
    }

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
        background-color: var(--white-blue);
    }
`