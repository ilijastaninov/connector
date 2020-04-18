import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createExperience, getExperience, getExperiences} from "../../actions/experienceActions";

const AddExperience = () => {
    const username = useSelector(state => state.auth.user.username);
    const [formData,setFormData] = useState({
        userExperience:'',
        title:'',
        company:'',
        from:'',
        to:'',
        current:false
    });
    const {userExperience,title,company,current,from,to} = formData;
    const dispatch = useDispatch();
    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createExperience(formData,{username}));
        //await dispatch(getExperience({username},userExperience));
        await dispatch(getExperiences({username}));
    };
    return (
        <section className="container">
            <h1 className="large text-primary">
                Add An Experience
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* userExperience" name="userExperience" value={userExperience} onChange={(e)=> onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Title" name="title" value={title} onChange={(e)=> onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Company" name="company" value={company} onChange={(e)=> onChange(e)}/>
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={(e)=> onChange(e)}/>
                </div>
                <div className="form-group">
                    <p><input type="checkbox" name="current" value={current} onChange={(e)=> onChange(e)}/> Current Job</p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to} onChange={(e)=> onChange(e)}/>
                </div>
                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to={"/dashboard"}>Go Back</Link>
            </form>
        </section>
    );
};

export default AddExperience;