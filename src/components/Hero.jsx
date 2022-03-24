import React from "react";
import HeroImage from "../assets/images/image-1 (1).png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Leave Management Software
          </h1>
          <p className="mb-8 leading-relaxed">
            LeaveBoard is a cloud HR software - designed to solve your HR
            challenges and help you manage your employees. It automates the
            workforce processes so that you and your employees can focus on
            growing your business. The flexible HR system suits the demands of
            startups and fast-growing businesses by streamlining processes. By
            empowering employees, they make better decisions based on accurate
            data.
          </p>
          <div className="flex justify-center">
            <Link
              to="/signup"
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Get started
            </Link>
            <Link
              to="/login"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HeroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
