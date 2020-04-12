import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOAD_USER,
    AUTH_ERROR,
    LOGOUT, CLEAR_PROFILE, PROFILE_CREATED, GET_PROFILE
} from "../actions/types";

const initialState = {
    jwt:localStorage.getItem('jwt'),
    isLogged:false,
    loading:true,
    user:null/*,
    profile:false*/
};
const authReducer = (state=initialState,action) => {
    const {payload,type} = action;
    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                isLogged:true,
                loading:false,
                user:payload
            }
        case REGISTER_SUCCESS:
            return state;

        case REGISTER_FAILED:
        case AUTH_ERROR:
        case LOGIN_FAILED:

            localStorage.removeItem('jwt');
            return {
                ...state,
                jwt:null,
                isLogged:false,
                loading:false
            };
        case LOGOUT:
            localStorage.removeItem('jwt');
            return {
                ...state,
                jwt:null,
                isLogged:false,
                loading:false,
                user:null
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('jwt',payload.jwt);
            return {
                ...state,
                ...payload,
                isLogged:true,
                loading:false
            };
        /*case CLEAR_PROFILE:
            return {
                ...state,

            };*/

        default:
            return state;
    }
};
export default authReducer;
