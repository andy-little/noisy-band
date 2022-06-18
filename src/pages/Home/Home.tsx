import React, { useRef, useEffect, useMemo } from 'react';
import { Album, Hero, About, Video, Subscribe, EP } from '../sections';
import Location from '../../constants/Location';

interface HomeProps {
  location: Location;
}
const Home: React.FC<HomeProps> = ({ location }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const refsMap = useMemo(
    () => ({
      [Location.ABOUT]: aboutRef,
      [Location.VIDEO]: videoRef,
      [Location.TOP]: { current: 0 },
    }),
    []
  );

  useEffect(() => {
    const goTo = refsMap[location];
    if (goTo.current !== 0) {
      console.log(goTo.current);
    }
    // object with Location as key and either ref or location of ref as value
    // doe something like this below

    // setScrollHeight(refsMap[location].current.height)
  }, [location, refsMap]);

  return (
    <>
      <Hero />
      <Album />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={videoRef}>
        <Video />
      </div>
      <Subscribe />
      <EP />
    </>
  );
};

export default Home;
