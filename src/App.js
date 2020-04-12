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
                        <PrivateRoute exact path={'/edit-profile'} component={EditProfile}/>
                        <PrivateRoute exact path={'/corona'} component={Corona}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
        </Provider>
    );
};

export default App;