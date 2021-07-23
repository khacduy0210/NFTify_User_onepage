import { RECIEVE_HIGHLIGHT_API_DATA } from "../actions/HighlightAction";

const HighlightInitialState = []
export const HighlightReducer = (state = HighlightInitialState, action) => {
    switch (action.type) {
        case RECIEVE_HIGHLIGHT_API_DATA:
            return action.data;
        
        default:
            return state
    }
}