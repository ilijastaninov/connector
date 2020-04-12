import {combineReducers} from "redux";
import alertReducer from './alertReducer'
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import coronaReducer from "./coronaReducer";
const rootReducer = combineReducers({
   alert:alertReducer,
   auth:authReducer,
   profile:profileReducer,
   corona:coronaReducer
});
export default rootReducer;