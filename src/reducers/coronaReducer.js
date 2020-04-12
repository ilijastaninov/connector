import {GET_CORONA} from "../actions/types";

const initialState = {
    coronas:[],
    loading:false
};

const coronaReducer = (state=initialState,action)=> {
    const {payload,type} = action;
    switch (type) {
        case GET_CORONA:
            return {
                coronas:payload,
                loading:true
            };
        default:
            return state;
    }
};
export default coronaReducer;