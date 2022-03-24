import React from "react";
import Form from "./../common/form";
import Joi from "joi-browser";
import * as userLeaveService from "../apis/leaveService";

class LeaveApply extends Form {
  state = {
    data: { reason: "", depart: "", return: "" },
    errors: {},
    message: "",
  };
  schema = {
    reason: Joi.string().required().label("Reason"),
    depart: Joi.date().required().label("Depart date"),
    return: Joi.date().required().label("Returnig date"),
  };
  doSubmit = async () => {
    let response = await userLeaveService.requestLeave(this.state.data);
    let requestLeave = await response.data;
    //console.log(requestLeave);
    this.setState({ message: response.data.message });
  };

  render() {

    return (
      <div className="">
        <label for="my-modal-2" className="btn btn-warning modal-button">
          Apply leave
        </label>
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h1 className="text-3xl font-extrabold">Apply leave here</h1>
            {
              this.state.message && (
                <div
                class="bg-green-500 border-t-4 border-teal-500 rounded-b text-white px-4 py-3 shadow-md"
                role="alert"
              >
                <div class="flex">
                  <div class="py-1">
                    <svg
                      class="fill-current h-6 w-6 text-teal-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold">{this.state.message}</p>
                  </div>
                </div>
              </div>
              )
            }

 
            <form
              onSubmit={this.handleSubmit}
              className="space-y-5 mt-5"
              autoComplete="off"
            >
              {this.renderInput(
                "reason",
                "Enter your leave reason",
                "text",
                "input input-bordered w-full"
              )}
              {this.renderInput(
                "depart",
                "Enter departure date",
                "text",
                "input input-bordered w-full"
              )}
              {this.renderInput(
                "return",
                "Enter return date",
                "text",
                "input input-bordered w-full"
              )}

              <div className="modal-action">
                {this.renderButton("Confirm Leave", "btn btn-warning")}
                <a href="/dashboard" className="btn btn-error">
                  Close
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveApply;
