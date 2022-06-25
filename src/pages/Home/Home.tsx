//import React, { useRef, useEffect, useMemo } from 'react';
import { Album, Hero, About, Video, Subscribe, EP } from '../sections';
//import Location from '../../constants/Location';

// interface HomeProps {
//   location: Location;
//   changes: number;
// }

const Home: React.FC /* <HomeProps> */ = (/* { location, changes } */) => {
  // const heroRef = useRef<HTMLDivElement>(null);
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const videoRef = useRef<HTMLDivElement>(null);

  // const refsMap = useMemo(
  //   () => ({
  //     [Location.HOME]: heroRef,
  //     [Location.ABOUT]: aboutRef,
  //     [Location.VIDEO]: videoRef,
  //   }),
  //   []
  // );

  /* const scrollToDestination = () => {
    if (location !== Location.NONE) {
      const selectedElement = refsMap[location].current;
      console.log(selectedElement);

      if (location !== Location.HOME && selectedElement) {
        console.log(selectedElement.getBoundingClientRect());
        window.scrollTo(0, selectedElement.getBoundingClientRect().y);
      }
    }
  }; */
  /* useEffect(() => {
    // needs to run scroll to function when page loads to
    // why isn't it, I think it works but because the page hasn't mounted the vaules are 0?
    // scrollToDestination();
  }, [changes]);
 */
  return (
    <>
      <div /* ref={heroRef} */>
        <Hero />
      </div>
      <Album />
      <div /* ref={aboutRef} */>
        <About />
      </div>
      <div /* ref={videoRef} */>
        <Video />
      </div>
      <Subscribe />
      <EP />
    </>
  );
};

export default Home;
