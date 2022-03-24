import axios from "axios";
export function appToken(){
    // function to set the token headers
const token = localStorage.getItem("access-token");
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
}
export default (
    appToken
)