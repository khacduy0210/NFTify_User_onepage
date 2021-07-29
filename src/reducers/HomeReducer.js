// import { RECIEVE_CATEGORY_API_DATA } from "../actions/CategoryAction";
// import { RECIEVE_HIGHLIGHT_API_DATA } from "../actions/HighlightAction";
// import { RECIEVE_NEW_ARRIVAL_API_DATA } from "../actions/NewArrivalAction";
// import { RECIEVE_COMING_SOON_API_DATA } from "../actions/ComingSoonAction";

// const InitialState = {
//     arrival:[]
// };
// const HomeReducer = (state = InitialState , action) => {
//     console.log(action,"action")
//     switch (action.type) {
//         case RECIEVE_CATEGORY_API_DATA:{
//             return action.category_data;
//         }
//         case RECIEVE_HIGHLIGHT_API_DATA:{
//             return action.highlight_data;
//         }
//         case RECIEVE_NEW_ARRIVAL_API_DATA:{
//             return {...state, arrival:[...state.arrival,action.new_arrival_data]};
//         }
//         case RECIEVE_COMING_SOON_API_DATA:{
//             return action.coming_soon_data;
//         }
//         default:    
//             return state;
//     }
    
// }
// export default HomeReducer;