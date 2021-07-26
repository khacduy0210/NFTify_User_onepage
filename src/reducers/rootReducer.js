import { combineReducers } from "redux";
import { HighlightReducer } from "./HighlightReducer";
import ProductReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";

const rootReducer = combineReducers({
    category : CategoryReducer,
    product : ProductReducer,
    highlight : HighlightReducer
})

export default rootReducer;