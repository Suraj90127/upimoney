import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <div id="pricing">
        <div className="w-full h-full bg-white">
          <div className="container pricing-section">
            <div className="col-md-6 text-md-start text-center -mt-14 -ml-14">
              <h1 className="text-white text-4xl font-bold leading-tight text-start">
                Pricing
              </h1>
              <p className="text-white text-start text-lg font-medium tracking-wide my-2">
                Choose Your Suitable Plan
              </p>
              <div className="  bg-white rounded-lg mt-10">
                <div className="flex-row bg-gray-100 px-20 rounded-lg ">
                  <div className="flex align-center flex-col justify-center text-center	py-5">
                    <h1 className="my-2 text-xl font-bold">Trial</h1>
                    <h2 className=" text-2xl font-bold tracking-wide">₹499</h2>
                    <p className="text-lg">1 Year</p>
                  </div>
                </div>
                <div className="flex-row bg-white px-20 rounded-lg">
                  <div className="flex align-center flex-col justify-center text-center	py-5 ">
                    <h1 className="my-2 text-lg" style={{ color: "#79B93C" }}>
                      4999 Transactions
                    </h1>
                    <h1 className="my-1 text-lg">0 Transaction Fee</h1>
                    <h1 className="my-1 text-lg">Realtime Transaction</h1>
                    <h1 className="my-1 text-lg">No Amount Limit </h1>
                    <h1 className="my-1 text-lg">1 Merchant Account</h1>
                    <h1 className="my-1 text-lg">UPI ID Validation API</h1>
                    <h1 className="my-1 text-lg">Static UPI QR Code</h1>
                    <h1 className="my-1 text-lg">Scan and Pay Feature</h1>
                    <h1 className="my-1 text-lg">Accept All UPI Apps</h1>
                    <h1 className="my-1 text-lg">24*7 WhatsApp Support</h1>
                  </div>
                </div>
                <Link to="/signup">
                  <div className="flex-row bg-gray-100 px-[30rem] rounded-lg">
                    <div className="flex align-center flex-col justify-center text-center	py-5">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 rounded">
                        Get Started
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <a href="">
              <img
                src="https://upimoney.in/1/images/bihar-it-solution.png"
                alt=""
                style={{ height: "250px", width: "300px", marginLeft: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
