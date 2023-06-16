import { useState, useEffect } from "react";
import axios from "axios";

function useGames() {
    const [upcoming, setUpcoming] = useState([]);
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Getting the date
    const getCurrentMonth = () => {
        const month = new Date().getMonth() + 1;
        return month < 10 ? `0${month}` : month;
    };
    
    const getCurrentDay = () => {
        const day = new Date().getDate();
        if (day < 10) {
        return `0${day}`;
        } else {
        return day;
        }
    };
    
    //Current Date
    const currentYear = new Date().getFullYear();
    const currentMonth = getCurrentMonth();
    const currentDay = getCurrentDay();
    
    const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const response = await axios.get('https://api.rawg.io/api/games', {
                    params: {
                        key: '1cc0229833854e9da5bf1094434c8f2d',
                        ordering: '-rating',
                        page_size: 10,
                    },
                });
                setPopular(response.data.results);
            } catch (error) {
                setError(error.message);
            }
        };

        const fetchUpcoming = async () => {
            try {
                const response = await axios.get('https://api.rawg.io/api/games', {
                    params: {
                        key: '1cc0229833854e9da5bf1094434c8f2d',
                        dates: `${currentDate},${nextYear}`,
                        ordering: '-added',
                        page_size: 10,
                    },
                });
                setUpcoming(response.data.results);
            } catch (error) {
                setError(error.message);
            }
        }

        // Fetch popular and upcoming games
        Promise.all([fetchPopular(), fetchUpcoming()])
            .then(() => setLoading(false))
            .catch((error) => setError(error.message));
    }, []);

    return { upcoming, popular, loading, error };
}

export default useGames;
