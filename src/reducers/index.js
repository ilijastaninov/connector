import {combineReducers} from "redux";
import alertReducer from './alertReducer'
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import coronaReducer from "./coronaReducer";
import experienceReducer from "./experienceReducer";
import educationReducer from "./educationReducer";
import courseReducer from "./courseReducer";
const rootReducer = combineReducers({
   alert:alertReducer,
   auth:authReducer,
   profile:profileReducer,
   corona:coronaReducer,
   experience:experienceReducer,
   education:educationReducer,
   course:courseReducer
});
export default rootReducer;