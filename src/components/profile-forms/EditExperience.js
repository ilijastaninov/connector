import React, {Fragment,useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editExperience, getExperience, getExperiences} from "../../actions/experienceActions";
import Spinner from "../layout/Spinner";

const EditExperience = (props) => {

    const username = useSelector(state => state.auth.user.username);

    const parameter = props.match.params.userExperience;
    const dispatch = useDispatch();
    const current_experience = useSelector(state => state.experience.current_experience);

    useEffect(()=>{
        console.log("MOUNT")
        //dispatch(getExperience({username},parameter))
        setFormData({
            userExperience: current_experience === null ? '' : current_experience.userExperience,
            title: current_experience === null ? '' : current_experience.title,
            company: current_experience === null ? '' : current_experience.company,
            from: current_experience === null ? '' : current_experience.from,
            to: current_experience === null ? '' : current_experience.to,
            user:{username}
        });
    },[current_experience]);

    useEffect(()=>{
            return () => {
                console.log("UNMOUNT from 2 use effect");

            }
    },[current_experience]);

    const [formData,setFormData] = useState({
        userExperience:'',
        title:'',
        company:'',
        from:'',
        to:'',
        current:false,
        user:{username}
    });

    console.log("ORDINARY");
    console.log(current_experience);

    //dispatch(getExperience({username},parameter));
    const {userExperience,title,company,current,from,to,user} = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };
    const onSubmit = async (e) => {
        e.preventDefault();
       await dispatch(editExperience(formData,user,userExperience));
        await dispatch(getExperiences(user));
    };
    return (
        <Fragment>
            {current_experience === null ? (
                <Spinner/>
                ):(
                <section className="container">
                <h1 className="large text-primary">
                Edit An Experience
                </h1>
                <p className="lead">
                <i className="fas fa-code-branch"></i> Edit any developer/programming
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
                )}

        </Fragment>
    );
};

export default EditExperience;