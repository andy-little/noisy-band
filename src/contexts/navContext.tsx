import React, { createContext, useState } from "react";
import Location from "../constants/Location";

interface ContextInterface {
    location: Location;
    setLocation: (value: Location) => void;
}
const NavCtx = createContext<ContextInterface | null>(null);

export const Provider = () => {
    const [location, setLocation] = useState(Location.TOP);
    return (
        <NavCtx.Provider value={{ location, setLocation }}></NavCtx.Provider>
    );
};
