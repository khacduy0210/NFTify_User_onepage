export const REQUEST_CATEGORY_API_DATA = 'REQUEST_CATEGORY_API_DATA';
export const RECIEVE_CATEGORY_API_DATA = 'RECIEVE_CATEGORY_API_DATA';

export const requestCategoryApiData = () => {return ({type: REQUEST_CATEGORY_API_DATA})};
export const recieveCategoryApiData = (category_data) => {return ({type: RECIEVE_CATEGORY_API_DATA, category_data})};
