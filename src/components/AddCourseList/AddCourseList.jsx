/* eslint-disable react/prop-types */
// import React from 'react';

const AddCourseList = ({ signleCourse }) => {
    // console.log(signleCourse);
    const { course, fee, duration } = signleCourse;

    return (
        <div className="border-2 mt-3 bg-gray-200 hover:bg-orange-400 p-3  ">
            <h1>{course}</h1>
            <h3>{fee}</h3>
            <p>{duration}</p>

        </div>
    );
};

export default AddCourseList;