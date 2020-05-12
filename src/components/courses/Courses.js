import React,{Fragment} from 'react';
import {useDispatch,useSelector} from "react-redux";

const Courses = () => {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.auth.user);
    const courses = useSelector(state => state.course.courses);
    const userCourses = useSelector(state=>state.auth.user.courses);
    const isThereCourse = useSelector(state => state.course.isThereCourse);
    return (
        <Fragment>
            <h1>Welcome <i className={'fas fa-user'}></i>{' '}{user.username} to your courses</h1>
            <div className="card" style={{width: "18rem"}}>
                {isThereCourse && userCourses !== null ?

                    (
                        <Fragment>
                            <ul className="list-group list-group-flush">
                                {userCourses.map(course => {
                                    return <li key={course.courseName} className="list-group-item">{course.courseName}</li>
                                })}
                            </ul>
                        </Fragment>
                    ):
                    (
                        <Fragment>
                            <h3>No added courses</h3>
                        </Fragment>
                    )
                }
            </div>
        </Fragment>
    );
};


export default Courses;