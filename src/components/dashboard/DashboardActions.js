import React from 'react';
import {Link} from "react-router-dom";
import {deleteProfile} from "../../actions/profileActions";
import {useDispatch, useSelector} from "react-redux";

const DashboardActions = () => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.user.username);
    const current_profile = useSelector(state => state.profile.current_profile);
    return (
        <div className="dash-buttons">
            <Link to={"/edit-profile"}  className="btn btn-light"
            ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link
            >
            <Link to={"/dashboard"} onClick={()=>dispatch(deleteProfile({username},current_profile.usernameProfile))} className="btn btn-danger"
            ><i className="fas fa-user-circle text-primary"></i> Delete Profile</Link
            >
            <Link to={"/add-experience"} className="btn btn-light"
            ><i className="fab fa-black-tie text-primary"></i> Add Experience</Link
            >
            <Link to={"/add-education"} className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Education</Link
            >
        </div>
    );
};

export default DashboardActions;