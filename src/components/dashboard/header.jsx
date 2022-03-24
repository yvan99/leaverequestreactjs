import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";
class DasHeader extends Component {
  state = {};
  render() {
    return (
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Dashboard</span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-right text-white justify-left">
            <Link to='/dashboard' className="mr-5 hover:text-white">Home</Link>
            <Link to='/applyleave' className="mr-5 hover:text-white">Apply Leave</Link>
            <Link to='' className="mr-5 hover:text-white">Leave Requests</Link>
            <Link to='' className="mr-5 hover:text-white">Account settings</Link>
          </nav>

          <NavLink to='/logout' className="inline-flex items-center bg-yellow-500 border-0 py-1 mx-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-gray-900 mt-4 md:mt-0">
            <i className='fa fa-user'></i>
            Sign out

          </NavLink>
        </div>
      </header>
    );
  }
}

export default DasHeader;
