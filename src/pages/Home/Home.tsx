import React from "react";
import { Album, Hero, About, Video, Subscribe, EP } from "../sections";

const Home = () => {
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
