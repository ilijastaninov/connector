import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addUserToCourse} from "../../actions/courseActions";

const AddUserToCourse = () => {
    const username = useSelector(state => state.auth.user.username);
    const password = useSelector(state => state.auth.user.password);
    const name = useSelector(state => state.auth.user.name);
    const email = useSelector(state => state.auth.user.email);
    const coursesReducer = useSelector(state => state.course.courses);
    const courseArray = useSelector(state => state.auth.user.courses);
    const [formData,setFormData] = useState({
        username:username,
        password:password,
        name:name,
        email:email,
        courses:courseArray
    });
    const dispatch = useDispatch();
    const onChange = (e) => {
        let event = e.target.value; // prevents event error when clicking the submit user to course twice
        setFormData(prevState => ({
            ...formData,
            username:username,
            password:password,
            name:name,
            email:email,
            courses:[...prevState.courses,{courseName:event }]
        }))
    };

    const onSubmit = async (e) => {
        console.log(courseArray);
        e.preventDefault();
        console.log(JSON.stringify(formData));

        await dispatch(addUserToCourse({username},JSON.stringify(formData)))
    };
    return (
        <Fragment>
            <h1 className="large text-primary">
                Add a person to a course, to get the best features.
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i>{username} Pick a course so you can learn from
                the best teachers.
            </p>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>


                <div className="form-group">
                    <select name="courseName"  onChange={(e)=> onChange(e)}>
                        <option value="0">* Select course</option>
                        {coursesReducer != null && coursesReducer.map(course=>{
                            return <option key={course.courseName} value={course.courseName}>{course.courseName}</option>
                        })}
                    </select>
                </div>


                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to={"/dashboard"}>Go Back</Link>
            </form>
        </Fragment>
    );
};

export default AddUserToCourse;