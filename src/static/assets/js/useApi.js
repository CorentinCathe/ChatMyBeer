const API_BASE_URL = `https://26kwy.sse.codesandbox.io/api/`;

const useApi = {
  forAutoComplete: search =>
    new Promise((resolve, reject) => {
      const AUTOCOMPLETE = API_BASE_URL + `brewery/leftname/${search}`;
      fetch(AUTOCOMPLETE)
        .then(response => response.json())
        .then(jsonResponse => resolve(jsonResponse))
        .catch(err => reject(err));
    }),
  forSearch: search =>
    new Promise((resolve, reject) => {
      const SEARCH = API_BASE_URL + `brewery/name/${search}`;
      fetch(SEARCH)
        .then(response => response.json())
        .then(jsonResponse => resolve(jsonResponse))
        .catch(err => reject(err));
    })
};

export default useApi;
