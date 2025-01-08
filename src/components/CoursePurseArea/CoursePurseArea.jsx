/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// import React from 'react';

import AddCourseList from "../AddCourseList/AddCourseList";

const CoursePurseArea = ({ addCourse }) => {
    // console.log(addcourse);

    return (
        <div className="grid grid-cols-4 gap-x-2">
            {
                addCourse.map(signleCourse => <AddCourseList signleCourse={signleCourse}
                    key={signleCourse.id}
                ></AddCourseList>)
            }
        </div>
    );
};

export default CoursePurseArea;