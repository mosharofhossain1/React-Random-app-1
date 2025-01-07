/* eslint-disable react/prop-types */
// import React from 'react';

const Services = (props) => {
    return (
        <div>

            <div className="border-2 p-4 bg-yellow-200 hover:bg-yellow-300 transition">
                <h1 className="text-2xl">Course Name : {props.course}</h1>
                <h2 className="font-bold">Course Fee : {props.Fee}</h2>
                <p>Course Duration : {props.Duration}</p>
            </div>
        </div>
    );
};

export default Services;