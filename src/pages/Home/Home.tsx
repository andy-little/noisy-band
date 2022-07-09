import React, { useEffect } from 'react';
import { Album, Hero, About, Video, Subscribe, EP } from '../sections';

const Home: React.FC = () => {
  useEffect(() => {
    console.count('rendered');
  }, []);

  return (
    <>
      <div>
        <Hero />
      </div>
      <Album />
      <div>
        <About />
      </div>
      <div>
        <Video />
      </div>
      <Subscribe />
      <EP />
    </>
  );
};

export default Home;
