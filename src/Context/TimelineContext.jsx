import React, { createContext, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
    const [interactions, setInteractions] = useState([]);

    const addInteraction = (type, name) => {
        const newItem = {
            id: Date.now(),
            type,
            name,
            date: new Date().toLocaleDateString()
        };

        setInteractions(prev => [...prev, newItem]);

        const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

        toast.success(`${formattedType} with ${name} added`);
    };

    return (
        <TimelineContext.Provider value={{ interactions, addInteraction }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;