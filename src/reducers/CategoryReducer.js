import { RECIEVE_CATEGORY_API_DATA } from "../actions/CategoryAction";

const CategoryInitialState = []
const CategoryReducer = (state = CategoryInitialState, action) => {
    console.log(action,"action")
    switch (action.type) {
        // console.log('aaa');
        case RECIEVE_CATEGORY_API_DATA:
            // console.log(action);
            return action.data;
        
        default:    
            return state;
    }
}

export default CategoryReducer;