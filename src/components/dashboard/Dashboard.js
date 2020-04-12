import React, {Fragment, useEffect} from 'react';
import Spinner from "../layout/Spinner";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import store from "../../store";
import {loadUser} from "../../actions/authActions";
import {getProfile} from "../../actions/profileActions";
import setAuthToken from "../../utills/setAuthToken";
import DashboardActions from "./DashboardActions";
if(localStorage.jwt){
    setAuthToken(localStorage.jwt);
}

const Dashboard = () => {
    useEffect(()=>{
        store.dispatch(loadUser());
    },[]);
    const loading = useSelector(state => state.auth.loading);
    const isProfileTrue = useSelector(state => state.profile.profile);
    const user = useSelector(state=>state.auth.user);
    const currentProfile = useSelector(state =>state.profile.current_profile);
    const dispatch = useDispatch();
    return (
        <Fragment>
           {/* {loading && profile === null ? <Spinner/> : <Fragment>Test</Fragment> }*/}
           <h1 className={'large text-primary'}>Dashboard</h1>
            <p className={'lead'}>
                {user !== null ? (
                        <Fragment> <i className={'fas fa-user'}></i>{' '}
                            <Fragment>Welcome {user.username}</Fragment></Fragment> )
                    :
                    (<Fragment><Spinner/></Fragment>)
                }
            </p>
            {/*isProfileTrue === true && */}
            {isProfileTrue === true && currentProfile !== null ? (

                <Fragment>
                    <DashboardActions/>
                    <h2 className={'my-2'}>Profile</h2>
                    <table className={"table"}>
                        <thead>
                            <tr>
                                <th>Username profile</th>
                                <th>Status</th>
                                <th>Bio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>{currentProfile.usernameProfile}</td>
                            <td>{currentProfile.status}</td>
                            <td>{currentProfile.bio}</td>
                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>
                    <p>You have not setup a profile, please add some info</p>
                    <Link to={'/create-profile'} className={'btn btn-primary my-1'}>Create profile</Link>
                </Fragment>

            )}
        </Fragment>
    );
};

export default Dashboard;