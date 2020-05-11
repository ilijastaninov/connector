import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCourse, getCourses} from "../../actions/courseActions";

const AddCourse = () => {
    const username = useSelector(state => state.auth.user.username);
    const [formData,setFormData] = useState({
        courseName:'',
    });
    const {courseName} = formData;
    const dispatch = useDispatch();
    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addCourse(formData));
        await dispatch(getCourses());
    };
    return (
        <section className="container">
            <h1 className="large text-primary">
                Add A Course
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add courses
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* Course name" name="courseName" value={courseName} onChange={(e)=> onChange(e)} />
                </div>

                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to={"/dashboard"}>Go Back</Link>
            </form>
        </section>
    );
};

export default AddCourse;