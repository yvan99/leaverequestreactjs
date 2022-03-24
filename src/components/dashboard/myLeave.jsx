import React, { Component } from "react";
import beforeApi from "../../assets/images/Ripple-1s-200px.gif";
import * as userLeaveService from "../../apis/leaveService";
class UserLeaveRequests extends Component {
  state = {
    message: "",
    leave: [],
  };

  async componentDidMount() {
    let response = await userLeaveService.userLeaves();
    let MyLeaveList = await response.data;
    //console.log(MyLeaveList);
    this.setState({ message: response.data.message, leave: MyLeaveList.data });
  }
  manageStatus = (status) => {
    if (status === "PENDING") {
      return "flex-no-shrink bg-yellow-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full";
    } else if (status === "APPROVED") {
      return "flex-no-shrink bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full";
    } else if (status === "DECLINED") {
      return "flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full";
    }
  };
  // cRequest cancelling leave

  doCancelLeave = async (leaveId) => {
    let apiResponse = await userLeaveService.requestCancel(leaveId);
    let requestLeave = await apiResponse.data;
    this.setState({ message: apiResponse.data.message });
    setTimeout(() => {
      window.location = "/dashboard";
    }, 3000);
    //console.log(requestLeave)
  };

  render() {
    const { leave } = this.state
    return (
      <div>
        {leave && (
          <div>
            <h1 className="text-gray-900 m-x p-4 font-medium capitalize text-3xl">
              {this.state.message}
            </h1>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
              {leave.map((rowLeave) => (
                // <li key={rowLeave.id}>{rowLeave.reason}</li>
                <div
                  class="flex flex-col p-4 bg-gray-900 shadow-md hover:shodow-lg rounded-2xl"
                  key={rowLeave.id}
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        class="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div class="flex flex-col ml-3">
                        <div class="font-medium leading-none text-gray-100">
                          <p className="capitalize text-1xl">
                            {rowLeave.reason}
                          </p>
                        </div>
                        <p class="text-sm text-gray-500 leading-none mt-1">
                          {rowLeave.depart_date} - {rowLeave.return_date}
                        </p>
                      </div>
                    </div>
                    <button class={this.manageStatus(rowLeave.status)}>
                      {rowLeave.status}
                    </button>
                  </div>
                  <button
                    className="bg-red-600 text-white m-auto p-1 shadow-md rounded-md "
                    onClick={() => this.doCancelLeave(rowLeave.id)}
                  >
                    Cancel leave
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {!leave && (
          <img
            alt="loading skeleton before API call"
            className="justify-center"
            src={beforeApi}
          ></img>
        )}
      </div>
    );
  }
}

export default UserLeaveRequests;
