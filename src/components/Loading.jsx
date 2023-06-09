import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${loadingAnimation} 1.2s linear infinite;
    }
`;

function Loading ({ loading }) {
    return (
        <>
        { loading && <LoadingOverlay /> }
        </>
    )
}

export default Loading