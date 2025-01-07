// import React from 'react';

import HeroSection from "../HeroSection/HeroSection";
import Home from "../Home/Home";
import Services from "../Services/Services";

const Allcomponents = () => {
    return (
        <div>
            <Home></Home>
            <HeroSection></HeroSection>
            <h1 className="text-4xl mt-5 m-5 font-bold">Our Services </h1>
            <div className="flex gap-x-5 mt-7">
                <Services course={'Data Entry'} Fee={'5,999 Tk'} Duration={'3 Month'}></Services>
                <Services course={'Web Design'} Fee={'9,999Tk'} Duration={'6 Month'}></Services>
                <Services course={'Web Development'} Fee={'10,999 Tk'} Duration={'6 Month'}></Services>
                <Services course={'Cyber Security'} Fee={'20,999 Tk'} Duration={'6 Month'}></Services>
            </div>
        </div >
    );
};

export default Allcomponents;