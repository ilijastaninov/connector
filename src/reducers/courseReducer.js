import {ADD_COURSE, GET_COURSES} from "../actions/types";

let initialState = {
    courses:[],
    isCourse:false,
    isThereCourse:false,
    current_course:null
};
const courseReducer = (state=initialState,action) => {
    const {payload,type} = action;
    switch (type) {
        case ADD_COURSE:
            return {
                ...state,
                isCourse:true,
                isThereCourse:true
            };
        case GET_COURSES:
            return {
                ...state,
                courses:payload
            };
        default:
            return state;
    }

};
export default courseReducer;