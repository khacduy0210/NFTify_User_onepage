import { combineReducers } from "redux";
import { HighlightReducer } from "./HighlightReducer";
import CategoryReducer from "./CategoryReducer";
import NewArrivalReducer from "./NewArrivalReducer";
import ComingSoonReducer from "./ComingSoonReducer";
// import HomeReducer from "./HomeReducer";

const rootReducer = combineReducers({
    category : CategoryReducer,
    newArrival: NewArrivalReducer,
    comingSoon: ComingSoonReducer,
    highlight : HighlightReducer,
    // homedata: HomeReducer
})

export default rootReducer;