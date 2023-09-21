import React from "react";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div class="main-signup flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#011f3f] rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="ml-60 pt-5">
            <h1 className="flex items-center mb-2 text-2xl font-semibold text-white ">
              {" "}
              Create Account
            </h1>
            <img className="w-14 h-14 ml-10 rounded-full" src={logo} alt="" />
          </div>
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form classN="space-y-8 md:space-y-6" action="#">
              <div className="mb-5">
                <label
                  for="pan"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  PAN Number
                </label>
                <input
                  type="pan"
                  name="pan"
                  id="pan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="PAN Number"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  for="panname"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Name as per PAN
                </label>
                <input
                  type="name"
                  name="panname"
                  id="panname"
                  placeholder="Name as per PAN"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Bussiness Name
                </label>
                <input
                  type="name"
                  name="bname"
                  id="bname"
                  placeholder="Bussiness Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Aadhaar Number
                </label>
                <input
                  type="name"
                  name="aname"
                  id="aname"
                  placeholder="Aadhaar Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  <div className="mb-5">
                    <label
                      for="number"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Mobile Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      required=""
                    />
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" class="text-white dark:text-gray-300">
                      I Accepts
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-30 text-white bg-primary-600  bg-green-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600  dark:text-primary-500"
                >
                  Proceed
                </a>
              </button>
              <button
                type="submit"
                className="w-30 mx-5 mt-5 text-white bg-primary-600  bg-[#007bff]  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <Link
                  to="/login"
                  className="text-sm font-medium text-primary-600  dark:text-primary-500"
                >
                  Back To Login
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
