import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DashboardActions from "./DashboardActions";
import {deleteProfile, getProfile} from "../../actions/profileActions";
import {Link} from "react-router-dom";

const ProfileTable = () => {
    const isProfileTrue = useSelector(state => state.profile.profile);
    const user = useSelector(state=>state.auth.user);
    const currentProfile = useSelector(state =>state.profile.current_profile);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {isProfileTrue === true && currentProfile !== null ?  (

                <Fragment>
                <h2 className={'my-2'}>Profile</h2>
                <table className={"table"}>
                <thead>
                <tr>
                <th>Status</th>
                <th>Bio</th>
                <th></th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                <tr id={currentProfile.usernameProfile}>
                <td>{currentProfile.status}</td>
                <td>{currentProfile.bio}</td>
                <td><button onClick={()=>dispatch(deleteProfile(user.username,currentProfile.usernameProfile))} className="btn btn-danger"
                > Delete Profile</button
                ></td>
                <td><Link to={`/profile-${currentProfile.usernameProfile}`} onClick={()=>dispatch(getProfile({username:user.username},currentProfile.usernameProfile))} className="btn btn-light"
                ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link
                ></td>
                </tr>
                </tbody>
                </table>
                </Fragment>

                ):(
                <Fragment></Fragment>
            )
            }
        </Fragment>
    );
};

export default ProfileTable;