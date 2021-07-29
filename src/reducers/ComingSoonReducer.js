import {RECIEVE_COMING_SOON_API_DATA} from "../actions/ComingSoonAction";

const ComingSoonInitialState = []
const ComingSoonReducer = (state = ComingSoonInitialState, action) => {
    console.log(action,"action coming soon");
    switch (action.type) {
        case RECIEVE_COMING_SOON_API_DATA:
            return action.coming_soon_data;
        default:
            return state;
    }
}
export default ComingSoonReducer;