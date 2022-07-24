import { Album, Hero, About, Video, Subscribe, EP } from '../sections';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Album />
      <About />
      <Video />
      <Subscribe />
      <EP />
    </>
  );
};

export default Home;
