import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const CourseTable = () => {

    const courses = useSelector(state=>state.course.courses);
    const isCourse = useSelector(state=>state.course.isCourse);
    //const userCourses = useSelector(state=>state.auth.user.courses);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {isCourse === true && courses !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Add user to course</h2>
                    <Link to={'/add-user-course'} className={'btn btn-primary my-1'}>Add a user to a course</Link>

                </Fragment>

            ):(
                <Fragment>

                </Fragment>

            )}


        </Fragment>
    );
};

export default CourseTable;