import React from "react";
import { Album, Hero, About, Video } from "../sections";

const Home = () => {
    return (
        <>
            <Hero />
            <Album />
            <About />
            <Video />
        </>
    );
};

export default Home;
