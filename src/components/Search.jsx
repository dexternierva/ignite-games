import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.25rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const StyledInput = styled.input`
    padding: 0.75rem 0.75rem;
    max-width: 320px;
    width: 100%;
    background-color: rgba(236, 240, 241, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 2px rgba(0, 0, 0, 0.24),
        inset 0 0 1px rgba(0, 0, 0, 0.2);
    border-radius: 0.125rem;
`;

const StyledButton = styled.button`
    padding: 0.75rem 1.5rem;
    max-width: 320px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgba(192, 57, 43, 1);
    font-family: var(--primary-ff);
    font-weight: bold;
    letter-spacing: 1px;
    color: rgba(236, 240, 241, 1);
    border-radius: 0.125rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 2px rgba(0, 0, 0, 0.24);
    transition: all 200ms ease-in;

    &:hover {
        background-color: rgba(231, 76, 60, 1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

function Search({ setSearchResults }) {
    const [searchKeyword, setSearchKeyword] = useState("");

    const base_url = "https://api.rawg.io/api/";
    const key_url = `key=cde73646e2584007ab3cc0aabb730e46`;

    const fetchData = (value) => {
        axios
            .get(
                `${base_url}games?${key_url}&search=${searchKeyword}&page_size=9`
            )
            .then((response) => {
                const results = response.data.results.filter((game) => {
                    return (
                        value &&
                        game &&
                        game.name &&
                        game.name.toLowerCase().includes(value)
                    );
                });
                setSearchResults(results);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (value) => {
        setSearchKeyword(value);
        fetchData(value);
    };

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <StyledFieldset>
                <StyledInput
                    placeholder="Type game title to search..."
                    type="text"
                    value={searchKeyword}
                    onChange={(event) => handleChange(event.target.value)}
                />
                <StyledButton>Search</StyledButton>
            </StyledFieldset>
        </form>
    );
}

export default Search;
