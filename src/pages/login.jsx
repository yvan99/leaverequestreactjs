import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import { Link } from "react-router-dom";
import { login } from "./../apis/LoginApi";
class LoginPage extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    isLoging: false,
    errMsg: "",
  };
  schema = {
    email: Joi.string()
      .required()
      .label("Email")
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().required().label("Password").min(5),
  };
  doSubmit = async () => {
    this.setState({ isLoging: true });
    const { data } = this.state;
    const { data: jwt } = await login(data.email, data.password);
    localStorage.setItem("access-token", jwt.access_token);
    window.location = "/dashboard";
    //this.props.history.push("/dashboard");
  };
  render() {
    // if user is logged in redirect him to the homepage
    // if (auth.getCurrentUser()) return <Redirect to="/dashboard" />;
    return (
      <div>
        <div class="h-screen bg-gray-900 flex flex-col space-y-10 justify-center items-center">
          <div class="bg-white w-96 shadow-lg rounded-lg p-5">
            <h1 class="text-3xl font-medium text-black">Sign In</h1>
            <p class="text-sm text-black">
              Enter your account credentials to continue
            </p>
            {this.state.errMsg}
            <form onSubmit={this.handleSubmit} className="space-y-5 mt-5">
              {this.renderInput(
                "email",
                "email",
                "email",
                "w-full h-12 flex items-center  border border-gray-800 text-black rounded px-3"
              )}
              {this.renderInput(
                "password",
                "Password",
                "password",
                "w-full h-12 flex items-center  border border-gray-800 text-black rounded px-3"
              )}
              <div class="flex items-left">
                <Link
                  to="/"
                  class="font-medium text-blue-700 hover:bg-blue-300 rounded-full p-2"
                >
                  Back home
                </Link>
              </div>
              <button
                type="submit"
                className="btn  btn-warning w-full rounded-lg"
              >
                {this.state.isLoging ? "Logging In.." : "Login"}
              </button>

              {/* {this.renderButton(
                "Login",
                "btn  btn-warning w-full rounded-lg"
              )} */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
