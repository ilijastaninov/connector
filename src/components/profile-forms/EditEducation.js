import React, {Fragment,useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../layout/Spinner";
import {editEducation, getEducations} from "../../actions/educationActions";

const EditEducation = (props) => {

    const username = useSelector(state => state.auth.user.username);

    const parameter = props.match.params.educationUser;
    const dispatch = useDispatch();
    const current_education = useSelector(state => state.education.current_education);

    useEffect(()=>{
        console.log("MOUNT")
        //dispatch(getExperience({username},parameter))
        setFormData({
            educationUser: current_education === null ? '' : current_education.educationUser,
            degree: current_education === null ? '' : current_education.degree,
            description: current_education === null ? '' : current_education.description,
            from: current_education === null ? '' : current_education.from,
            to: current_education === null ? '' : current_education.to,
            user:{username}
        });
    },[current_education]);

    useEffect(()=>{
        return () => {
            console.log("UNMOUNT from 2 use effect");

        }
    },[current_education]);

    const [formData,setFormData] = useState({
        educationUser:'',
        degree:'',
        description:'',
        from:'',
        to:'',
        current:false,
        user:{username}
    });

    console.log("ORDINARY");
    console.log(current_education);

    //dispatch(getExperience({username},parameter));
    const {educationUser,degree,description,current,from,to,user} = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(editEducation(formData,user,educationUser));
        await dispatch(getEducations(user));
    };
    return (
        <Fragment>
            {current_education === null ? (
                <Spinner/>
            ):(
                <section className="container">
                    <h1 className="large text-primary">
                        Edit An Education
                    </h1>
                    <p className="lead">
                        <i className="fas fa-code-branch"></i> Edit any fields of study
                         that you have had in the past
                    </p>
                    <small>* = required field</small>
                    <form className="form" onSubmit={(e)=> onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" placeholder="* educationUser" name="educationUser" value={educationUser} onChange={(e)=> onChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="* Degree" name="degree" value={degree} onChange={(e)=> onChange(e)} />
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
            )}

        </Fragment>
    );
};

export default EditEducation;