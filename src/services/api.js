import axios from "axios";

const URL = "http://localhost:3000/";

function createAxiosInstance() {
  return axios.create({
      validateStatus: () => {
          return true;
      },
    });
}

//GET
export function get(uri, headers) {
  const instance = createAxiosInstance();
  return instance.get(URL + uri, { headers: { ...headers} });
}

//DELETE
export function del(uri, headers) {
  const instance = createAxiosInstance(headers);
  return instance.delete(URL + uri, { headers: { ...headers} });
}

//POST
export function post(uri, data, headers) {
  const instance = createAxiosInstance(headers);
  return instance.post(URL + uri, data, { headers: {...headers}});
}

//PUT
export function put(uri, data, headers) {
    const instance = createAxiosInstance(headers);
    return instance.put(URL + uri, data, { headers: { ...headers} });
}
