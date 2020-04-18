import {combineReducers} from "redux";
import alertReducer from './alertReducer'
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import coronaReducer from "./coronaReducer";
import experienceReducer from "./experienceReducer";
import educationReducer from "./educationReducer";
const rootReducer = combineReducers({
   alert:alertReducer,
   auth:authReducer,
   profile:profileReducer,
   corona:coronaReducer,
   experience:experienceReducer,
   education:educationReducer
});
export default rootReducer;