// import React from 'react';

import Blogs from "../Blogs/Blogs";
import HeroSection from "../HeroSection/HeroSection";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
const Allcomponents = () => {
    return (
        <div>
            {/* home and hero compo start */}
            <Home></Home>
            <HeroSection></HeroSection>
            {/* Home and hero compo end  */}

            {/* Service compo start */}
            <h1 className="text-4xl mt-5 m-5 font-bold underline decoration-4 underline-offset-4">Our Services </h1>
            <div className="flex gap-x-5 mt-7">
                <Services course={'Data Entry'} Fee={'5,999 Tk'} Duration={'3 Month'}></Services>
                <Services course={'Web Design'} Fee={'9,999Tk'} Duration={'6 Month'}></Services>
                <Services course={'Web Development'} Fee={'10,999 Tk'} Duration={'6 Month'}></Services>
                <Services course={'Cyber Security'} Fee={'20,999 Tk'} Duration={'6 Month'}></Services>
            </div>
            {/* service compo end  */}

            {/* Bloge Compo start */}
            <h1 className="text-4xl mt-9 mb-9 font-bold underline decoration-4 underline-offset-4 ">Our Bloges </h1>

            <div className="grid sm:grid-cols-3 gap-5">
                <Blogs></Blogs>
                <Blogs></Blogs>
                <Blogs></Blogs>
                <Blogs></Blogs>
                <Blogs></Blogs>
                <Blogs></Blogs>
                <Blogs></Blogs>
                <Blogs></Blogs>
                <Blogs></Blogs>

            </div>
            {/* Bloge compo end  */}


            {/* Contact compo start */}
            <Contact></Contact>
            {/* Contact compo end */}
        </div >
    );
};

export default Allcomponents;