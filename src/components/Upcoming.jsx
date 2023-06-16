import React, { useContext, useEffect } from "react";
import { GamesContext } from "../containers/App";
import axios from "axios";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiHandTruck } from "react-icons/gi";

const StyledSection = styled.section`
    --max-width: 1200px;
    --min-gap: 24px;
    --side-gap: calc(
        (100vw - min(var(--max-width), calc(100vw - (var(--min-gap) * 2)))) / 2
    );
    margin-top: 1rem;
    padding-left: var(--side-gap);
    padding-right: var(--side-gap);

    @media screen and (min-width: 768px) {
        margin-top: 2rem;
    }
`;

const StyledSectionTitle = styled.h2`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 0.5rem;
    letter-spacing: 2px;
`;

const StyledCards = styled.ul`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
    gap: 1rem;
`;

const StyledCard = styled.li`
    border-radius: 0.5rem;
    background-color: rgba(52, 73, 94, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        box-shadow: 0 16px 24px rgba(0, 0, 0, 0.24), 0 6px 16px rgba(0, 0, 0, 0.12);
    }
`;

const StyledImg = styled.img`
    border-radius: 0.5rem 0.5rem 0 0;
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
`;

const StyledHelperText = styled.div`
    padding: 1rem 0.75rem;
`;

const StyledName = styled.h3`
    font-size: 0.937rem;
    font-weight: 700;
    line-height: 1;
`;

const StyledRelease = styled.p`
    margin-top: 0.5rem;
    font-size: 0.823rem;
    font-weight: 400;
    color: rgba(236, 240, 241, 0.5);
`;

function Upcoming ({ setModalData, setModalState }) {
    const { upcoming } = useContext(GamesContext);
    const sortedUpcoming = upcoming.sort((a, b) => new Date(a.released) - new Date(b.released));

    if (upcoming.length < 10) <h1>Loading...</h1>

    const base_url = "https://api.rawg.io/api/";
    const key_url = `key=37e62e281031468882765dbce79cef8d`;

    const fetchData = (id) => {
        axios
            .get(`${base_url}games/${id}?${key_url}`)
            .then((response) => {
                const result = response.data;
                setModalData(result)
                setModalState(true);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <StyledSection>
            <IconContext.Provider value={{ color: 'rgba(192, 57, 43, 1)', size: '2.4rem' }}>
                <StyledSectionTitle><GiHandTruck />Upcoming Games</StyledSectionTitle>
            </IconContext.Provider>
            <StyledCards>
                {sortedUpcoming.map((game) => {
                    return (
                        <StyledCard key={game.id} onClick={() => fetchData(game.id)}>
                            <StyledImg src={game.background_image} />
                            <StyledHelperText>
                                <StyledName>{game.name}</StyledName>
                                <StyledRelease>Release: {new Date(game.released).toLocaleDateString("en-US")}</StyledRelease>
                            </StyledHelperText>
                        </StyledCard>
                    )
                })}
            </StyledCards>
        </StyledSection>
    )
}

export default Upcoming;