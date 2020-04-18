import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createEducation, getEducations} from "../../actions/educationActions";

const AddEducation = () => {
    const username = useSelector(state => state.auth.user.username);
    const [formData,setFormData] = useState({
        educationUser:'',
        degree:'',
        description:'',
        from:'',
        to:'',
        current:false
    });
    const {educationUser,degree,description,current,from,to} = formData;
    const dispatch = useDispatch();
    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createEducation(formData,{username}));
        //await dispatch(getExperience({username},userExperience));
        await dispatch(getEducations({username}));
    };
    return (
        <section className="container">
            <h1 className="large text-primary">
                Add An Education
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add school degrees that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* educationUser" name="educationUser" value={educationUser} onChange={(e)=> onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* degree" name="degree" value={degree} onChange={(e)=> onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Description" name="description" value={description} onChange={(e)=> onChange(e)}/>
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

export default AddEducation;