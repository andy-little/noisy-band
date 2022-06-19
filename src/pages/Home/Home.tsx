import React, { useRef, useEffect, useMemo } from 'react';
import { Album, Hero, About, Video, Subscribe, EP } from '../sections';
import Location from '../../constants/Location';
import { useNavCtx } from '../../contexts/navContext';

interface HomeProps {
  location: Location;
}
const Home: React.FC<HomeProps> = ({ location }) => {
  const { setScrollToY } = useNavCtx();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const refsMap = useMemo(
    () => ({
      [Location.TOP]: heroRef,
      [Location.ABOUT]: aboutRef,
      [Location.VIDEO]: videoRef,
    }),
    []
  );

  useEffect(() => {
    const goTo = refsMap[location];
    if (location !== Location.TOP && goTo.current) {
      setScrollToY(goTo.current.getBoundingClientRect().y);
      // window.scrollTo(0, goTo.current.getBoundingClientRect().y);
    } else if (location === Location.TOP) {
      setScrollToY(0);
    }
  }, [setScrollToY, location, refsMap]);

  return (
    <>
      <div ref={heroRef}>
        <Hero />
      </div>
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
