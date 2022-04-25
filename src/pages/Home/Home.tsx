import React from "react";
import { Album, Hero, About, Video, Subscribe } from "../sections";

const Home = () => {
    return (
        <>
            <Hero />
            <Album />
            <About />
            <Video />
            <Subscribe />
        </>
    );
};

export default Home;
