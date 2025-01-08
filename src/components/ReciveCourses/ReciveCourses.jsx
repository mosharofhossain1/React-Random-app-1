/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';

const ReciveCourses = ({ courseName, addToCardCourse }) => {
    const { course, fee, duration } = courseName
    return (
        <div className=" rounded-lg bg-orange-400 hover:bg-orange-500 p-3 text-white font-bold">
            <h1>Course Name : {course} </h1>
            <h2>Course Fee : {fee} </h2>
            <p>Course Duration : {duration} </p>
            <button onClick={() => addToCardCourse(courseName)} className="bg-teal-600 px-3 py-2 text-white font-bold mt-4 rounded-lg">Buy Course</button>
        </div>
    );
};

export default ReciveCourses;