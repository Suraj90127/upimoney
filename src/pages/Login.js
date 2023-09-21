import React from "react";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container main-login">
        <section className="">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-[#011f3f] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="ml-40 pt-5">
                <h1 className="flex items-center mb-2 text-2xl font-semibold text-white ml-10 ">
                  {" "}
                  Login
                </h1>
                <img
                  className="w-14 h-14 ml-10 rounded-full"
                  src={logo}
                  alt=""
                />
              </div>
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form classN="space-y-8 md:space-y-6" action="#">
                  <div className="mb-5">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="uname"
                      name="uname"
                      id="umame"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter Username"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      required=""
                    />
                  </div>
                  <div className="relative mb-5">
                    <label
                      for="otp"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      OTP Code
                    </label>
                    <input
                      type="otp"
                      name="otp"
                      id="otp"
                      placeholder="Enter OTP Code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                      required=""
                    />
                    <div>
                      <button
                        type="submit"
                        className="absolute bottom-[1px] flex w-30 ml-[277px]  justify-center rounded-r-md bg-[#007bff] px-1 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2"
                      >
                        Send OTP Code
                      </button>
                    </div>
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
                        <label
                          for="remember"
                          class="text-white dark:text-gray-300"
                        >
                          I Accepts
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="flex w-30 justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600  dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-30 text-white bg-primary-600  bg-green-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600  dark:text-primary-500"
                    >
                      Login Now
                    </a>
                  </button>
                  <button
                    type="submit"
                    className="w-30 mx-5 mt-5 text-white bg-primary-600  bg-[#007bff]  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <Link
                      to="/signup"
                      className="text-sm font-medium text-primary-600  dark:text-primary-500"
                    >
                      Create Account
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
