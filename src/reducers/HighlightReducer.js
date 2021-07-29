import { RECIEVE_HIGHLIGHT_API_DATA } from "../actions/HighlightAction";

const HighlightInitialState = []
export const HighlightReducer = (state = HighlightInitialState, action) => {
    console.log(action,"action highlight");
    switch (action.type) {
        case RECIEVE_HIGHLIGHT_API_DATA:
            return action.highlight_data;
        default:
            return state;
    }
}