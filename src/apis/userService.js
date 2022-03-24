import http from "./httpService";
import { ApiUrl } from "../config.json";

const apiEndpoint = ApiUrl + "/register";
const applyEndpoint = ApiUrl + "/requestLeave";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    names: user.names,
  });
}

export default{
  register
}
