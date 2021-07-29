export const REQUEST_COMING_SOON_API_DATA = 'REQUEST_COMING_SOON_API_DATA';
export const RECIEVE_COMING_SOON_API_DATA = 'RECIEVE_COMING_SOON_API_DATA';

export const requestComingSoonApiData = () => {return ({type: REQUEST_COMING_SOON_API_DATA})};
export const recieveComingSoonApiData = (coming_soon_data) => {return ({type: RECIEVE_COMING_SOON_API_DATA, coming_soon_data})};