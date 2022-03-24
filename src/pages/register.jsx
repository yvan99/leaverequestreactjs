import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import { Link } from "react-router-dom";
import * as userService from "./../apis/userService";
class RegisterPage extends Form {
  state = {
    data: { email: "", password: "",names:"" },
    errors: {},
  };
  schema = {
    names: Joi.string().required().label("Names"),
    email: Joi.string().required().label("Email").email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','rw'] } }),
    password: Joi.string().required().label("Password").min(5),
  };
  doSubmit = async () => {
    try {
      const response=await userService.register(this.state.data);
      // localStorage.setItem('token',response.headers['x-auth-token'])
       this.props.history.push('/login')
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        const errors = { ...this.state.errors };
        //console.log("error", ex.response);
        //toast.error("something went wrong");
        this.setState({ errors });

      }

    }
  };

  render() {
    return (
      <div>
        <div class="h-screen bg-gray-900 flex flex-col space-y-10 justify-center items-center">
          <div class="bg-white w-96 shadow-lg rounded-lg p-5">
            <h1 class="text-3xl font-medium text-black">Sign Up Now</h1>
            <p class="text-sm text-black">
              Just give us few information to get you started
            </p>
            <form
              onSubmit={this.handleSubmit}
              className="space-y-5 mt-5"
              autoComplete="off"
            >
              {this.renderInput(
                "names",
                "Enter your names",
                "names",
                "w-full h-10 flex items-center text-black  border border-gray-800 rounded px-3"
              )}
              {this.renderInput(
                "email",
                "Valid email address",
                "email",
                "w-full h-10 flex items-center text-black  border border-gray-800 rounded px-3"
              )}
              {this.renderInput(
                "password",
                "Password",
                "password",
                "w-full h-10 flex items-center text-black  border border-gray-800 rounded px-3"
              )}
              <div class="">
                <Link
                  to="/"
                  class="font-medium text-blue-700 hover:bg-blue-300 rounded-full p-2"
                >
                  Back home
                </Link>
              </div>

              {this.renderButton(
                "Create Account",
                "text-center w-full bg-yellow-500 rounded-lg text-gray-900 py-3 font-medium"
              )}

              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
