import React, { createContext, useContext, useState } from 'react';
import Location from '../constants/Location';
import { locationState } from '../interfaces/locationState';

interface ContextInterface {
  location: locationState;
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
  const [location, setLocation] = useState<locationState>({
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
