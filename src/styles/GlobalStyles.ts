import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #BADC58;
        --secondary-color: #1D164D;
        --tertiary-color: #9E9BAF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: 'Mulish', sans-serif !important;
    }

    body {
        overflow-x: hidden;
    }

    h1.custom-title, h2.custom-title, h3.custom-title, h4.custom-title{
        font-family: 'Montserrat', sans-serif !important; 
        color: var(--secondary-color) !important;
        font-weight: bold;
    }

    .links {
        text-decoration: none;
        background-color: var(--primary-color);
        color: #fff;
        border-radius: 7px;
        padding: 14px 24px;
        font-size: 16px;
        line-height: 27px;
        transition: all 300ms;

        &:hover{
                opacity: 0.8;
                color: var(--secondary-color);
            }
    }

`