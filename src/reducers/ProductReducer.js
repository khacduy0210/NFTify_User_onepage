import { RECIEVE_PRODUCT_API_DATA } from "../actions/ProductAction";

const ProductInitialState = []
const ProductReducer = (state = ProductInitialState, action) => {
    switch (action.type) {
        case RECIEVE_PRODUCT_API_DATA:
            return action.data;
        
        default:
            return state
    }
}
export default ProductReducer;