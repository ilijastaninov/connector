import React, {useState,Fragment} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {createProfile, getProfile} from "../../actions/profileActions";

const CreateProfile = () => {
    const username = useSelector(state => state.auth.user.username);
    const userProfile = useSelector(state => state.auth.user.profile/*[0].usernameProfile*/);
    const [formData,setFormData] = useState({
        usernameProfile:'',
        status:'',
        bio:'',
        user:{username},
        profile_user:{...userProfile}
    });


    const dispatch = useDispatch();
    const {usernameProfile,status,bio,user,profile_user} = formData;


    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
            profile_user:{...profile_user,...usernameProfile}
        });

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createProfile(formData,user));
        await dispatch(getProfile(user,usernameProfile));
    };

    return (
        <Fragment>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i>{username} Let's get some information to make your
                profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>

                <div className="form-group">
                    <input type={'text'} placeholder="Enter username profile" name="usernameProfile" value={usernameProfile} onChange={(e)=> onChange(e)}/>
                </div>

                <div className="form-group">
                    <select name="status" value={status} onChange={(e)=> onChange(e)}>
                        <option value="0">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={(e)=> onChange(e)}></textarea>
                    <small className="form-text">Tell us a little about yourself</small>
                </div>

                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to={"/dashboard"}>Go Back</Link>
            </form>
        </Fragment>
    );
};

export default CreateProfile;