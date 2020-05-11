import React from 'react';
import {Link} from "react-router-dom";
import { useSelector} from "react-redux";

const DashboardActions = () => {
    const flagProfile = useSelector(state => state.profile.flagProfile);
    return (
        <div className="dash-buttons">
            {flagProfile === false ? <Link to={"/create-profile"}  className="btn btn-light"
            ><i className="fas fa-user-circle text-primary"></i> Add Profile</Link
            > : <button disabled={flagProfile} className="btn btn-light"
            ><i className="fas fa-user-circle text-primary"></i> Add Profile</button
            >}

            <Link to={"/add-experience"} className="btn btn-light"
            ><i className="fab fa-black-tie text-primary"></i> Add Experience</Link
            >
            <Link to={"/add-education"} className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Education</Link
            >
            <Link to={"/add-course"} className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Course</Link
            >
        </div>
    );
};

export default DashboardActions;