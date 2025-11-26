import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [doctors, setDoctors] = useState([]);
    const [loadingDoctors, setLoadingDoctors] = useState(true);
    const [error, setError] = useState(null);

    const currencySymbol = '$';

    // Fetch doctors from backend
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch("http://localhost:3000/doctor/all");

                if (!response.ok) {
                    throw new Error("Failed to fetch doctors");
                }

                const data = await response.json();
                setDoctors(data);
            } catch (err) {
                console.error("Error fetching doctors:", err);
                setError("Failed to load doctors");
            } finally {
                setLoadingDoctors(false);
            }
        };

        fetchDoctors();
    }, []);

    const value = {
        doctors,
        loadingDoctors,
        error,
        currencySymbol
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
