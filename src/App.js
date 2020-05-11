import React,{Fragment,useEffect} from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {Provider} from 'react-redux';
import store from './store';
import Alert from "./components/layout/Alert";
import setAuthToken from "./utills/setAuthToken";
import {loadUser} from "./actions/authActions";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import Corona from "./components/corona/Corona";
import AddExperience from "./components/profile-forms/AddExperience";
import EditExperience from "./components/profile-forms/EditExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import EditEducation from "./components/profile-forms/EditEducation";
import Courses from "./components/courses/Courses";
import AddCourse from "./components/profile-forms/AddCourse";
import AddUserToCourse from "./components/profile-forms/AddUserToCourse";

if(localStorage.jwt){
    setAuthToken(localStorage.jwt);
}

const App = () => {
    return (
        <Provider store={store}>
            <Router>
            <Fragment>
                <Navbar/>
                <Route exact path={'/'} component={Landing}/>
                <section className={'container'}>
                    <Alert/>
                    <Switch>
                        <Route exact path={'/register'} component={Register}/>
                        <Route exact path={'/login'} component={Login}/>
                        <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                        <PrivateRoute exact path={'/create-profile'} component={CreateProfile}/>
                        <PrivateRoute exact path={'/profile-:usernameProfile'} component={EditProfile}/>
                        <PrivateRoute exact path={'/corona'} component={Corona}/>
                        <PrivateRoute exact path={'/add-experience'} component={AddExperience}/>
                        <PrivateRoute exact path={'/add-education'} component={AddEducation}/>
                        <PrivateRoute exact path={'/experience-:userExperience'} component={EditExperience}/>
                        <Route exact path={'/education-:educationUser'} component={EditEducation}/>
                        <PrivateRoute exact path={'/courses'} component={Courses}/>
                        <PrivateRoute exact path={'/add-course'} component={AddCourse}/>
                        <PrivateRoute exact path={'/add-user-course'} component={AddUserToCourse}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
        </Provider>
    );
};

export default App;