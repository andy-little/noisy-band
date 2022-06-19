import React, { createContext, useContext, useState } from 'react';
import Location from '../constants/Location';

interface ContextInterface {
  location: { location: Location; changes: number };
  setLocation: (value: any) => void;
}
const NavCtx = createContext<ContextInterface>({
  location: { location: Location.TOP, changes: 0 },
  setLocation: () => {},
});

interface NavProvProps {
  children: React.ReactNode;
}

export const NavProvider: React.FC<NavProvProps> = ({ children }) => {
  const [location, setLocation] = useState<{
    location: Location;
    changes: number;
  }>({
    location: Location.TOP,
    changes: 0,
  });
  return (
    <NavCtx.Provider value={{ location, setLocation }}>
      {children}
    </NavCtx.Provider>
  );
};

export const useNavCtx = () => {
  return useContext(NavCtx);
};
