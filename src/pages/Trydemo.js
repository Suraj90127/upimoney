import React from "react";

const Trydemo = () => {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="flex flex-row items-center justify-center py-8 mx-auto lg:py-0">
            <div className="relative  h-[40rem] img-section">
              <div className="border-[1px] rounded-lg my-16">
                <img src="https://upimoney.in/images/logo.png" alt="" />
                <img src="https://upimoney.in/images/upimoneyqr.jpg" alt="" />
              </div>
            </div>
            <div className="w-full bg-white rounded-lg  md:mt-0 h-[45rem] sm:max-w-[40rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="px-6 sm:px-8">
                <h1 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                  Test Demo
                </h1>
                <p className="text-lg">Fill Payment Detail and Pay</p>
              </div>
              <hr className="mt-5 mx-8"></hr>
              <form
                className="space-y-4 md:space-y-6 px-10 pt-5 sm:px-10"
                action="submit"
              >
                <div className="">
                  <label
                    for="countries"
                    class="block text-2xl font-medium text-gray-900 dark:text-white"
                  >
                    Gateway Type:
                  </label>
                  <select
                    id="countries"
                    className="mt-3 bg-gray-100 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Robotics</option>
                    <option value="US">Robotics</option>
                    <option value="CA">x</option>
                    <option value="FR">y</option>
                    <option value="DE">z</option>
                  </select>
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                  >
                    Txn Amount:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder="1"
                    disabled
                    value="1"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                  >
                    Txn Note:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled
                    value="Test Payment"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                  >
                    Mobile No:
                  </label>
                  <input
                    type="number"
                    name="mnumber"
                    id="mnumber"
                    placeholder="Enter Your Mobile"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                  >
                    Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="border-[1px] rounded-lg pb-6 mx-[100px] mb-20"
            style={{ width: "83%" }}
          >
            <div className="my-5 p-6 ml-10 text-[#007bff] hover:underline ">
              <a href="">
                <h1 className="text-4xl pb-5  font-medium">Video Tutorial</h1>
                <h1>
                  Video tutorial help to understand how to upimoney gateway work
                </h1>
              </a>
            </div>
            <hr className="mx-5" />
            <a href="">
              <img
                src="https://upimoney.in/1/images/bihar-it-solution.png"
                alt=""
                style={{ height: "250px", width: "300px", marginLeft: "20px" }}
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Trydemo;
