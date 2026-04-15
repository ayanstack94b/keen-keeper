import React, { createContext, useState } from 'react';

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
        console.log("New Interaction:", newItem);

        setInteractions(prev => [...prev, newItem]);
    };

    return (
        <TimelineContext.Provider value={{ interactions, addInteraction }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;