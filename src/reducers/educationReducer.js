import {DELETE_EDUCATION, EDUCATION_CREATED, GET_EDUCATION, GET_EDUCATIONS} from "../actions/types";

const initialState = {
    educations:[],
    current_education:null,
    isEducation:false
};

const educationReducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch (type) {
        case EDUCATION_CREATED:
            return {
                ...state,
                isEducation:true
            };
        case GET_EDUCATION:
            return {
                ...state,
                current_education:payload,

            };
        case GET_EDUCATIONS:
            return {
                ...state,
                educations:payload
            };
        case DELETE_EDUCATION:
            return {
                ...state,
                isEducation:true,
                educations:[...state.educations.filter(education => education.educationUser!== payload)]
            };
        default:
            return state
    }
};
export default educationReducer