import axios from "axios";
import {setAlert} from "./alertActions";
import {DELETE_EXPERIENCE, EDIT_EXPERIENCE, EXPERIENCE_CREATED, GET_EXPERIENCE, GET_EXPERIENCES} from "./types";

export const createExperience = (formData,{username}) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.post(`users/${username}/experiences`,formData,config);
        dispatch({
            type:EXPERIENCE_CREATED
        });
        dispatch(setAlert("Experience created",'success'));
    }catch (e) {

    }
};
export const getExperience = ({username},userExperience) => async dispatch => {
    try {
        const res = await axios.get(`users/${username}/experiences/${userExperience}`)
        dispatch({
            type:GET_EXPERIENCE,
            payload:res.data
        })
    }catch (e) {

    }
};
export const getExperiences = ({username}) => async dispatch => {
    try {
        const res = await axios.get(`users/${username}/experiences`);
        dispatch({
            type:GET_EXPERIENCES,
            payload:res.data
        })
    }catch (e) {

    }
};
export const editExperience = (formData,{username},userExperience) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.put(`users/${username}/experiences/${userExperience}`,formData,config);
        dispatch({
            type:EDIT_EXPERIENCE
        })
    }catch (e) {

    }
};
export const deleteExperience = ({username},userExperience) => async dispatch => {
    try {
        const res = await axios.delete(`users/${username}/experiences/${userExperience}`);
        dispatch({
            type:DELETE_EXPERIENCE,
            payload:userExperience
        });

    }catch (e) {

    }
};