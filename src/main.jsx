import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App.jsx";

// Global Styles
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    :root {
        --primary-clr: 44, 62, 80;
        --secondary-clr: 236, 240, 241;
        --accent-clr: 192, 57, 43;
        --surface-clr: 44, 62, 80;

        --primary-ff: 'Barlow Condensed', sans-serif;
        --secondary-ff: 'Barlow Semi Condensed', sans-serif;
    }

    /* RESET
    -------------------------------------------------------------------- */

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    button,
    fieldset,
    input,
    legend,
    select,
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font: inherit;
    }

    /* BASE
    -------------------------------------------------------------------- */
    body {
        background-color: rgba(var(--primary-clr), 1);
        color: rgba(var(--secondary-clr), 1);
        font-family: var(--secondary-ff);
        font-size: 100%;
        line-height: 1.5;
    }

    h1 {
        font-size: 1.383rem; /* 22.13px */
        font-family: var(--primary-ff);
    }

    h2 {
        font-size: 1.296rem; /* 20.74 */
        font-family: var(--primary-ff);
    }

    h3 {
        font-size: 1.215rem; /* 19.44 px */
        font-family: var(--secondary-ff);
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
