import React from "react";

import Search from "./Search";
import styled from "styled-components";

const StyledBackground = styled.div`
    background-image: url(https://media.rawg.io/media/games/041/041e04184322bc859d617b790d8bfab9.jpg);
    background-size: cover;
`;

const StyledHeroOuter = styled.div`
    --max-width: 1200px;
    --min-gap: 24px;
    --side-gap: calc(
        (100vw - min(var(--max-width), calc(100vw - (var(--min-gap) * 2)))) / 2
    );
    padding-top: 4rem;
    padding-bottom: 6rem;
    padding-left: var(--side-gap);
    padding-right: var(--side-gap);
    background-color: rgba(44, 62, 80, 0.5);
    backdrop-filter: blur(2px);

    /* ff 3.6+ */
    background:-moz-linear-gradient(180deg, rgba(255, 255, 0, 0) 0%, rgba(44, 62, 80, 1) 100%); 

    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(180deg, rgba(255, 255, 0, 0) 0%, rgba(44, 62, 80, 1) 100%);

    /* opera 11.10+ */
    background:-o-linear-gradient(180deg, rgba(255, 255, 0, 0) 0%, rgba(44, 62, 80, 1) 100%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2C3E50', endColorstr='#FFFF00', GradientType=1 );

    /* ie 10+ */
    background:-ms-linear-gradient(180deg, rgba(255, 255, 0, 0) 0%, rgba(44, 62, 80, 1) 100%);

    /* global 94%+ browsers support */
    background:linear-gradient(180deg, rgba(255, 255, 0, 0) 0%, rgba(44, 62, 80, 1) 100%);
`;

const StyledHeroContent = styled.div``;

const StyledHeroImg = styled.div``;

const StyledHeadline = styled.h1`
    display: block;
    color: rgba(236, 240, 241);
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: 64px;
    }
`;

const StyledSubheader = styled.h2`
    margin-top: 0;
    font-size: 32px;
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

function Hero ({setSearchResults}) {
    return (
        <StyledBackground>
            <StyledHeroOuter>
                <StyledHeroContent>
                    <StyledHeadline href="#">Ignite Games</StyledHeadline>
                    <StyledSubheader>New and Upcoming Games</StyledSubheader>
                    <Search setSearchResults={setSearchResults}/>
                </StyledHeroContent>
                <StyledHeroImg>

                </StyledHeroImg>
            </StyledHeroOuter>
        </StyledBackground>
    )
}

export default Hero;