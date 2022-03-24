import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import DasHeader from "../components/dashboard/header";
import Analytics from "./../components/dashboard/analytics";
import { getJwt } from "../apis/LoginApi";
class Dashboard extends Component {
  state = {};
  componentDidMount() {
    try {
      const decoder = jwtDecode(getJwt());
      //console.log(decoder);
      this.setState({ decoder });
    } catch (ex) {}
  }

  render() {
    return (
      <div className="bg-gray-200 h-full">
        <DasHeader />
        <Analytics user={this.state.decoder} />
      </div>
    );
  }
}

export default Dashboard;
