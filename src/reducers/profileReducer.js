import {DELETE_PROFILE, GET_PROFILE, PROFILE_CREATED} from "../actions/types";

const initialState = {
    current_profile: null,
    profile:false,
    loading:true,
    flagProfile:false
};

const profileReducer = (state=initialState,action) =>{
    const {payload,type} = action;

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                current_profile:payload
            };
        case PROFILE_CREATED:
            return {
                ...state,
                profile:!state.profile,
                flagProfile:true
            };
        case DELETE_PROFILE:
            return {
                ...state,
                profile:!state.profile,
                current_profile:null,
                flagProfile:false
            };
        default:
            return state;
    }
};

export default profileReducer;