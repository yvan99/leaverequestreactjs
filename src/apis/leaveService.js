import { ApiUrl } from "../config.json";
import axios from "axios";
import { appToken } from "./apiService";
const apiEndpoint = ApiUrl;
const applyEndpoint = ApiUrl + "/requestLeave";
// call to the bearer token holder function
appToken();
export async function userLeaves() {
  return await axios.get(apiEndpoint + "/MyLeaveList");
}
export async function requestCancel(leaveId) {
  return await axios.delete(ApiUrl + '/MyLeaveList/' + leaveId + "/cancelLeave");
}
export async function requestLeave(leave) {
  return await axios.post(applyEndpoint, {
    reason: leave.reason,
    depart_date: leave.depart,
    return_date: leave.return,
  });
}

export default {
  userLeaves,
  requestLeave,
  requestCancel,
};
