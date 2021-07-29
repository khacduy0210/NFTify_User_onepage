import { RECIEVE_CATEGORY_API_DATA } from "../actions/CategoryAction";

const CategoryInitialState = []
const CategoryReducer = (state = CategoryInitialState, action) => {
    console.log(action,"action")
    switch (action.type) {
        case RECIEVE_CATEGORY_API_DATA:
            return action.category_data;
        default:    
            return state;
    }
}

export default CategoryReducer;