import React, { createContext, useContext, useState } from 'react';
import Location from '../constants/Location';

interface ContextInterface {
  location: Location;
  setLocation: (value: Location) => void;
  setScrollToY: (value: number) => void;
  goToSection: (value: Location) => void;
}
const NavCtx = createContext<ContextInterface>({
  location: 0,
  setLocation: () => {},
  goToSection: () => {},
  setScrollToY: () => {},
});

interface NavProvProps {
  children: React.ReactNode;
}

export const NavProvider: React.FC<NavProvProps> = ({ children }) => {
  const [location, setLocation] = useState(Location.TOP);
  const [scrollToY, setScrollToY] = useState(0);
  const goToSection = (loc: Location) => {
    console.log(scrollToY);

    setLocation(loc);
    console.log(scrollToY);
    window.scrollTo(0, scrollToY);
  };
  return (
    <NavCtx.Provider
      value={{ location, setLocation, goToSection, setScrollToY }}
    >
      {children}
    </NavCtx.Provider>
  );
};

export const useNavCtx = () => {
  return useContext(NavCtx);
};
