import {DELETE_EXPERIENCE, EXPERIENCE_CREATED, GET_EXPERIENCE, GET_EXPERIENCES} from "../actions/types";

const initialState = {
    experiences:[],
  current_experience:null,
  isExperience:false
};

const experienceReducer = (state=initialState,action) => {
    const {payload,type} = action;
    switch (type) {
        case EXPERIENCE_CREATED:
            return {
                ...state,
                isExperience:true
            };
        case GET_EXPERIENCE:
            return {
                ...state,
                current_experience:payload
            };
        case GET_EXPERIENCES:
            return {
                ...state,
                experiences:payload
            };
        case DELETE_EXPERIENCE:
            return {
                ...state,
                isExperience:true,
                /*current_experience:null,*/
                experiences:[...state.experiences.filter(experience => experience.userExperience !== payload)]
            };
        default:
            return state;
    }
};


export default experienceReducer;