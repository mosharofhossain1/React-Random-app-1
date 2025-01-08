/* eslint-disable react/prop-types */
// import React from 'react';

const Services = ({ courseName, addToCardCourse }) => {
    return (
        <div>

            <div className="border-2 p-4 bg-yellow-200 hover:bg-yellow-300 transition">
                <h1 className="text-2xl">Course Name : </h1>
                <h2 className="font-bold">Course Fee : </h2>
                <p>Course Duration : </p>
                <button onClick={() => addToCardCourse(courseName)} className="bg-teal-400 px-3 py-2 text-white font-bold mt-4 rounded-lg">Purces Course</button>
            </div>
        </div>
    );
};

export default Services;