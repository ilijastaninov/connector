import axios from 'axios';
import {setAlert} from "./alertActions";
import {GET_CORONA} from "./types";


export const getCorona = () => async dispatch =>{
    try {
        const res = await axios.get("/corona");
        dispatch({
            type:GET_CORONA,
            payload:res.data
        });
    }catch (e) {

    }
};
