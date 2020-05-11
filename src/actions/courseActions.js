import axios from "axios";
import {ADD_COURSE, GET_COURSES, PUT_COURSE} from "./types";
import {setAlert} from "./alertActions";

export const addCourse = (formData) =>  async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.post(`/courses`,formData,config);
        dispatch({
            type:ADD_COURSE
        });
        dispatch(setAlert("Course created",'success'));
    }catch (e) {

    }
};
export const getCourses = () => async dispatch => {
    try {
        const res = await axios.get(`/courses`);
        dispatch({
            type:GET_COURSES,
            payload:res.data
        })
    }catch (e) {

    }
};
export const addUserToCourse = ({username},courses) => async dispatch => {
        try {
            const config = {
                headers:{
                    "Content-type":"application/json"
                }
            };
            const res = await axios.put(`/user/${username}`,courses,config);
            dispatch({
                type:PUT_COURSE
            })
            dispatch(setAlert("User added to course",'success'));
        }catch (e) {

        }
}