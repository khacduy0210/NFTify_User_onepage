export const REQUEST_PRODUCT_API_DATA = 'REQUEST_PRODUCT_API_DATA';
export const RECIEVE_PRODUCT_API_DATA = 'RECIEVE_PRODUCT_API_DATA'

export const requestProductApiData = () => {return ({type: REQUEST_PRODUCT_API_DATA})};
export const recieveProductApiData = data => {return ({type: RECIEVE_PRODUCT_API_DATA, data})};