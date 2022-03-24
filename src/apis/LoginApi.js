import http from "./httpService";
import { ApiUrl } from "../config.json";
const apiEndpoint = ApiUrl + "/login";
const tokenKey = "access-token";
//http.setJwt(getJwt());

export function login(email, password) {

  return http.post(apiEndpoint,{email,password})
 
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default{
  getJwt,
  login,
  logout,
}


