import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";

const rootReducer = combineReducers({
    homedata: HomeReducer,
});
export default rootReducer;
