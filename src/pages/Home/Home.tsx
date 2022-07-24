import { Album, Hero, About, Video, Subscribe, EP } from '../sections';

const Home: React.FC = () => {
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
