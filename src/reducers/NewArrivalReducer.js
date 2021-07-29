import {RECIEVE_NEW_ARRIVAL_API_DATA} from "../actions/NewArrivalAction";

const NewArrivalInitialState = []
const NewArrivalReducer = (state = NewArrivalInitialState, action) => {
    console.log(action,"action NewArrival");
    switch (action.type) {
        case RECIEVE_NEW_ARRIVAL_API_DATA:
            return action.new_arrival_data;
        default:
            return state;
    }
    
}
export default NewArrivalReducer;