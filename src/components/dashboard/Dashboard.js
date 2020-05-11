import React, {Fragment, useEffect} from 'react';
import Spinner from "../layout/Spinner";
import {useSelector,useDispatch} from "react-redux";
import store from "../../store";
import {loadUser} from "../../actions/authActions";
import setAuthToken from "../../utills/setAuthToken";
import DashboardActions from "./DashboardActions";
import ProfileTable from "./ProfileTable";
import ExperienceTable from "./ExperienceTable";
import EducationTable from "./EducationTable";
import CourseTable from "./CourseTable";
if(localStorage.jwt){
    setAuthToken(localStorage.jwt);
}

const Dashboard = () => {
    useEffect(()=>{
        store.dispatch(loadUser());
    },[]);
    const user = useSelector(state=>state.auth.user);
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
            <DashboardActions/>

            <ProfileTable/>
            <ExperienceTable/>
            <EducationTable/>
            <CourseTable/>
        </Fragment>
    );
};

export default Dashboard;