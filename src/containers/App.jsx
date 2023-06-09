import React, { useState, createContext } from "react";
import useGames from "./useGames";

import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Upcoming from "../components/Upcoming";
import Popular from "../components/Popular";
import SearchResults from "../components/SearchResults";
import Modal from "../components/Modal";

// Create Context
export const GamesContext = createContext();

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [modalData, setModalData] = useState({});
    const [modalState, setModalState] = useState(false);

    let {  upcoming, popular, loading, error } = useGames();

    return (
        <GamesContext.Provider
            value={{ upcoming, popular }}
        >
            <Loading loading={loading} />
            <Modal 
                open={modalState} 
                onClose={() => {setModalState(false)}} 
                modalData={modalData}
            />
            <Hero setSearchResults={setSearchResults} />
            <SearchResults 
                searchResults={searchResults} 
                setModalData={setModalData}
                setModalState={setModalState}
            /> 
            <Upcoming 
                setModalData={setModalData}
                setModalState={setModalState}
            />
            <Popular 
                setModalData={setModalData}
                setModalState={setModalState}
            />
        </GamesContext.Provider>
    )
}

export default App;
