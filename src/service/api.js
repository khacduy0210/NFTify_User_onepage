import axios from "axios";

export const getApi = (api,params) => {
    const fullApiUrl = getFullUrl(api);
    console.log(fullApiUrl);
    return axios.get(fullApiUrl,{
        params: params
    })
              .then(function (response) {
                  console.log(((response.data).data).records);
                  return (((response.data).data).records);
              })
              .catch(function (error) {
                  // handle error
                  console.log(error);
              })
}
const getFullUrl = (url) =>{
    if(!url.startsWith("/")) url = "/" + url;
    return `${process.env.REACT_APP_PUBLIC_API_URL}` + url;
}
