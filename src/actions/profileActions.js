import axios from 'axios';
import {PROFILE_CREATED, GET_PROFILE, EDIT_PROFILE, DELETE_PROFILE} from "./types";
import {setAlert} from "./alertActions";


export const createProfile = (formData,{username},edit=false) => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        };
        /*const parsed = JSON.parse(username);
        console.log("Parsed username" + parsed);*/
        const res = await axios.post(`/users/${username}/profiles`,formData,config);
        dispatch({
            type:PROFILE_CREATED
        })
        dispatch(setAlert(edit ? 'Profile updated':'Profile created',"success"));

    }catch (e) {
        
    }
};

export const getProfile = ({username},profile)  => async dispatch => {
    try {
        const res = await axios.get(`/users/${username}/profiles/${profile}`);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    }catch (e) {

    }
};
export const editProfile = (formData,{username},profile)  => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        };
        const res = await axios.put(`/users/${username}/profile/${profile}`,formData,config);
        dispatch(setAlert( 'Profile updated',"success"));
        dispatch({
            type:EDIT_PROFILE
        })
    }catch (e) {

    }
};
export const deleteProfile = ({username},profile)  => async dispatch => {
    try {
        const res = await axios.delete(`/users/${username}/profile/${profile}`);
        dispatch({
            type:DELETE_PROFILE
        })
    }catch (e) {

    }
};