import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {logout} from "../../actions/authActions";

const Navbar = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.auth.isLogged);
    const loading = useSelector(state => state.auth.loading);
    const authLinks = (
        <ul>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            <li><Link to={'/corona'}>CoronaVirus</Link></li>
            <li><Link to={'/'} onClick={()=>dispatch(logout())}>
                <i className={'fas fa-sign-out-alt'}></i>{' '}
                <span className={'hide-sm'}>Logout</span></Link></li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li><Link to={'/register'}>Register</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </ul>
    )
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to={"/"}><i className="fas fa-code"></i> DevConnector</Link>
            </h1>
            {(<Fragment>{ isLogged ? authLinks : guestLinks }</Fragment>)}
        </nav>
    );
};

export default Navbar;