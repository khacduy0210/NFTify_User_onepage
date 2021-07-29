export const REQUEST_HIGHLIGHT_API_DATA = 'REQUEST_HIGHLIGHT_API_DATA';
export const RECIEVE_HIGHLIGHT_API_DATA = 'RECIEVE_HIGHLIGHT_API_DATA';

export const requestHighlightApiData = () => {return ({type: REQUEST_HIGHLIGHT_API_DATA})}
export const recieveHighlightApiData = (highlight_data) => {return ({type: RECIEVE_HIGHLIGHT_API_DATA, highlight_data})}