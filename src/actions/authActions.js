import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOAD_USER,
    AUTH_ERROR,
    LOGOUT,
    CLEAR_PROFILE
} from "./types";
import setAuthToken from "../utills/setAuthToken";

export const loadUser = () => async dispatch => {
    if(localStorage.jwt){
        setAuthToken(localStorage.jwt);
    }
    try {
        const res = await axios.get('/user');
        dispatch({
            type:LOAD_USER,
            payload:res.data
        })
    }catch (e) {
        dispatch({
            type:AUTH_ERROR
        })
    }
};


export const register = ({username,password,name,email})=> async dispatch => {
    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }
    const body = JSON.stringify({username,password,name,email});
    try {
        const res = await axios.post('/users',body,config);
        dispatch({
            type:REGISTER_SUCCESS
        })
    }catch (e) {
        dispatch({
            type:REGISTER_FAILED
        })
    }
};
export const login = ({username,password}) => async dispatch => {
    const config = {
        headers:{
            'Content-type':'application/json'
        }
    };
    const body = JSON.stringify({username,password});
    try {
        const res = await axios.post('/authenticate',body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    }catch (e) {
        dispatch({
            type:LOGIN_FAILED
        })
    }
};
export const logout = () => dispatch =>{
    dispatch({
        type:CLEAR_PROFILE
    })
    dispatch({
        type:LOGOUT
    })
};
