import React, { createContext, useContext, useState } from "react";
import Location from "../constants/Location";

interface ContextInterface {
    location: Location;
    setLocation: (value: Location) => void;
}
const NavCtx = createContext<ContextInterface>({
    location: 0,
    setLocation: () => {},
});

interface NavProvProps {
    children: React.ReactNode;
}

export const NavProvider: React.FC<NavProvProps> = ({ children }) => {
    const [location, setLocation] = useState(Location.TOP);
    return (
        <NavCtx.Provider value={{ location, setLocation }}>
            {children}
        </NavCtx.Provider>
    );
};

export const useNavCtx = () => {
    return useContext(NavCtx);
};
