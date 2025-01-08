/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// import React from 'react';

import Blogs from "../Blogs/Blogs";
import HeroSection from "../HeroSection/HeroSection";
import Home from "../Home/Home";
// import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react";
import ReciveCourses from "../ReciveCourses/ReciveCourses";
import CoursePurseArea from "../CoursePurseArea/CoursePurseArea";
const Allcomponents = () => {

    // Api load data Operation by useEffect 
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // AddToCard Button opearation by useState 
    const [addCourse, setAddCourse] = useState([]);
    console.log(addCourse);

    const addToCardCourse = (course) => {
        // console.log(courses)
        const newCourse = [...addCourse, course];
        setAddCourse(newCourse);

    }

    return (
        <div>
            {/* home and hero compo start */}
            <Home></Home>
            <HeroSection></HeroSection>
            {/* Home and hero compo end  */}

            {/* Service compo start */}
            <h1 className="text-4xl mt-5 m-5 font-bold underline decoration-4 underline-offset-4">Our Services </h1>

            <div className="grid grid-cols-4 gap-x-3 mt-7">
                {
                    courses.map(courseName => <ReciveCourses
                        key={courseName.id}
                        courseName={courseName}
                        addToCardCourse={addToCardCourse}
                    ></ReciveCourses>)
                }
            </div>
            {/* service compo end  */}

            {/* Course Purses List area start */}
            <CoursePurseArea addCourse={addCourse}></CoursePurseArea>
            {/* Course Purses List area end  */}

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