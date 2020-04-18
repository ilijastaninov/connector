import axios from 'axios';
import {
    DELETE_EDUCATION,
    EDIT_EDUCATION,
    EDUCATION_CREATED, GET_EDUCATION,
    GET_EDUCATIONS
} from "./types";
import {setAlert} from "./alertActions";

export const createEducation = (formData,{username}) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.post(`users/${username}/educations`,formData,config);
        dispatch({
            type:EDUCATION_CREATED
        });
        dispatch(setAlert("Education created",'success'));
    }catch (e) {

    }
};
export const getEducation = ({username},educationUser) => async dispatch => {
    try {
        const res = await axios.get(`users/${username}/educations/${educationUser}`)
        dispatch({
            type:GET_EDUCATION,
            payload:res.data
        })
    }catch (e) {

    }
};
export const getEducations = ({username}) => async dispatch => {
    try {
        const res = await axios.get(`users/${username}/educations`);
        dispatch({
            type:GET_EDUCATIONS,
            payload:res.data
        })
    }catch (e) {

    }
};
export const editEducation = (formData,{username},educationUser) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.put(`users/${username}/educations/${educationUser}`,formData,config);
        dispatch({
            type:EDIT_EDUCATION
        })
    }catch (e) {

    }
};
export const deleteEducation = ({username},educationUser) => async dispatch => {
    try {
        const res = await axios.delete(`users/${username}/educations/${educationUser}`);
        dispatch({
            type:DELETE_EDUCATION,
            payload:educationUser
        });

    }catch (e) {

    }
};