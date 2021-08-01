import axios from "axios";
import { message } from "antd";
const getFullUrl = (url) => {
    if (!url.startsWith("/")) url = "/" + url;
    return `${process.env.REACT_APP_PUBLIC_API_URL}` + url;
};

export const api = {
    get: (api, params) => {
        const fullApiUrl = getFullUrl(api);
        console.log(fullApiUrl);
        return axios
            .get(fullApiUrl, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
            })
            .catch((error) => {
                if (error.response) {
                    message.error(error.message);
                } else if (error.request) {
                    message.error(error.message);
                } else {
                    message.error(error.message);
                }
            });
    },
    post: (api, params) => {
        const fullApiUrl = getFullUrl(api);
        console.log(fullApiUrl);
        return axios
            .get(fullApiUrl, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
            })
            .catch((error) => {
                if (error.response) {
                    message.error(error.message);
                } else if (error.request) {
                    message.error(error.message);
                } else {
                    message.error(error.message);
                }
            });
    },
    put: (api, params) => {
        const fullApiUrl = getFullUrl(api);
        console.log(fullApiUrl);
        return axios
            .get(fullApiUrl, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
            })
            .catch((error) => {
                if (error.response) {
                    message.error(error.message);
                } else if (error.request) {
                    message.error(error.message);
                } else {
                    message.error(error.message);
                }
            });
    },
    delete: (api, params) => {
        const fullApiUrl = getFullUrl(api);
        console.log(fullApiUrl);
        return axios
            .get(fullApiUrl, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
            })
            .catch((error) => {
                if (error.response) {
                    message.error(error.message);
                } else if (error.request) {
                    message.error(error.message);
                } else {
                    message.error(error.message);
                }
            });
    },
};
