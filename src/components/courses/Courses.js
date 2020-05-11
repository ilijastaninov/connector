import React,{Fragment} from 'react';
import {useDispatch,useSelector} from "react-redux";

const Courses = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.course.courses);
    const isThereCourse = useSelector(state => state.course.isThereCourse);
    return (
        <Fragment>
            <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush">
                    {isThereCourse && courses != null ?
                        <Fragment>
                            {courses.map(course =>
                                {
                                    return <li key={course.courseName} className="list-group-item">{course.courseName}</li>

                                }
                            )}
                        </Fragment>
                        :   <Fragment>No courses available</Fragment>
                    }
                </ul>
            </div>
        </Fragment>
    );
};


export default Courses;