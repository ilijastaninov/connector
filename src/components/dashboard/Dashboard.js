import React, {Fragment, useEffect} from 'react';
import Spinner from "../layout/Spinner";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import store from "../../store";
import {loadUser} from "../../actions/authActions";
import {deleteProfile, getProfile} from "../../actions/profileActions";
import setAuthToken from "../../utills/setAuthToken";
import DashboardActions from "./DashboardActions";
import {deleteExperience, editExperience, getExperience} from "../../actions/experienceActions";
import {deleteEducation, getEducation} from "../../actions/educationActions";
if(localStorage.jwt){
    setAuthToken(localStorage.jwt);
}

const Dashboard = () => {
    useEffect(()=>{
        store.dispatch(loadUser());
    },[]);
    const isProfileTrue = useSelector(state => state.profile.profile);
    const user = useSelector(state=>state.auth.user);
    const currentProfile = useSelector(state =>state.profile.current_profile);
    /*const currentExperience = useSelector(state => state.experience.current_experience);*/
    const isExperience = useSelector(state => state.experience.isExperience);
    const experiences = useSelector(state => state.experience.experiences);
    const isEducation = useSelector(state=>state.education.isEducation);
    const educations = useSelector(state=>state.education.educations);
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
            {/*<DashboardActions/>*/}

            {isProfileTrue === true && currentProfile !== null ? (

                <Fragment>
                    <DashboardActions/>
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
                                ><i className="fas fa-user-circle text-primary"></i> Delete Profile</button
                                ></td>
                                <td><Link to={`/profile-${currentProfile.usernameProfile}`} onClick={()=>dispatch(getProfile({username:user.username},currentProfile.usernameProfile))} className="btn btn-danger"
                                ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link
                                ></td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>
                    <p>You have not setup a profile, please add some info</p>
                    <Link to={'/create-profile'} className={'btn btn-primary my-1'}>Create profile</Link>
                </Fragment>

            )}
            {isExperience === true && experiences !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Experience</h2>
                    <p>Add an experience</p>
                    <Link to={'/add-experience'} className={'btn btn-primary my-1'}>Create experience</Link>

                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>From</th>
                            <th>To</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            experiences.map(exp => {
                                return <tr key={exp.userExperience}>
                                    <td>{exp.title}</td>
                                    <td>{exp.company}</td>
                                    <td>{exp.from}</td>
                                    <td>{exp.to}</td>
                                    <td><button type={'button'} onClick={()=>{if(window.confirm(`Are you sure u want to delete ${exp.userExperience}?`)) dispatch(deleteExperience({username:user.username},exp.userExperience))}} className={'btn btn-danger'}>Delete experience</button></td>
                                    <td><Link type={'button'} onClick={()=>dispatch(getExperience({username:user.username},exp.userExperience))} to={`/experience-${exp.userExperience}`}  className={'btn btn-light'}>Edit experience</Link></td>
                                </tr>
                            })
                        }

                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>
                    <p>You have not setup an experience, please add some info</p>
                    <Link to={'/add-experience'} className={'btn btn-primary my-1'}>Create experience</Link>
                </Fragment>

            )}
            {isEducation === true && educations !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Educations</h2>
                    <p>Add an education</p>
                    <Link to={'/add-education'} className={'btn btn-primary my-1'}>Create education</Link>

                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Degree</th>
                            <th>Description</th>
                            <th>From</th>
                            <th>To</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            educations.map(edu => {
                                return <tr key={edu.educationUser}>
                                    <td>{edu.degree}</td>
                                    <td>{edu.description}</td>
                                    <td>{edu.from}</td>
                                    <td>{edu.to}</td>
                                    <td><button type={'button'} onClick={()=>{if(window.confirm(`Are you sure u want to delete ${edu.educationUser}?`)) dispatch(deleteEducation({username:user.username},edu.educationUser))}} className={'btn btn-danger'}>Delete education</button></td>
                                    <td><Link type={'button'} onClick={()=>dispatch(getEducation({username:user.username},edu.educationUser))} to={`/education-${edu.educationUser}`}  className={'btn btn-light'}>Edit education</Link></td>
                                </tr>
                            })
                        }

                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>
                    <p>You have not setup an education, please add some info</p>
                    <Link to={'/add-education'} className={'btn btn-primary my-1'}>Create education</Link>
                </Fragment>

            )}
        </Fragment>
    );
};

export default Dashboard;