export const REQUEST_NEW_ARRIVAL_API_DATA = 'REQUEST_NEW_ARRIVAL_API_DATA';
export const RECIEVE_NEW_ARRIVAL_API_DATA = 'RECIEVE_NEW_ARRIVAL_API_DATA';

export const requestNewArrivalApiData = () => {return ({type: REQUEST_NEW_ARRIVAL_API_DATA})};
export const recieveNewArrivalApiData = (new_arrival_data) => {return ({type: RECIEVE_NEW_ARRIVAL_API_DATA, new_arrival_data})};