import React,{Fragment} from 'react';
import {useSelector} from "react-redux";
import {Route,Redirect} from "react-router-dom";

const PrivateRoute = ({component:Component,...rest}) => {
    const isLogged = useSelector(state => state.auth.isLogged);
    //const loading = useSelector(state => state.auth.loading);
    return (
        <Route {...rest}
                render={props => !isLogged ? (<Redirect to={'/login'}/>) : (<Component {...props}/>)}

        />
    )
};

export default PrivateRoute;