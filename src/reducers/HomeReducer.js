import { RECIEVE_CATEGORY_API_DATA } from "../actions/CategoryAction";
import { RECIEVE_HIGHLIGHT_API_DATA } from "../actions/HighlightAction";
import { RECIEVE_NEW_ARRIVAL_API_DATA } from "../actions/NewArrivalAction";
import { RECIEVE_COMING_SOON_API_DATA } from "../actions/ComingSoonAction";

const InitialState = {
    highlight: [],
    new_arrival: [],
    coming_soon: [],
    category: [],
};
const HomeReducer = (state = InitialState, action) => {
    console.log(action, "action");
    switch (action.type) {
        case RECIEVE_CATEGORY_API_DATA: {
            state.category = action.category_data;
            console.log(state, "category reducer");
            return state;
        }
        case RECIEVE_HIGHLIGHT_API_DATA: {
            state.highlight = action.highlight_data;
            console.log(state, "highlight reducer");
            return state;
        }
        case RECIEVE_NEW_ARRIVAL_API_DATA: {
            state.new_arrival = action.new_arrival_data;
            console.log(state, "new arrival reducer");
            return state;
        }
        case RECIEVE_COMING_SOON_API_DATA: {
            state.coming_soon = action.coming_soon_data;
            console.log(state, "coming soon reducer");
            return state;
        }
        default:
            return state;
    }
};
export default HomeReducer;
