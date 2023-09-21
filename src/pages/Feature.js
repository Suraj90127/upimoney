import React from "react";

const Feature = () => {
  return (
    <>
      <div>
        <div className="w-full h-full bg-white pt-10" id="feature">
          <div className="container feature-section">
            <div className=" flex flex-row align-center ">
              <div className="col-md-6 text-md-start text-center mr-10 -ml-14">
                <h1 className="text-white text-4xl font-bold py-5 leading-tight text-start">
                  Scan and Pay Feature
                </h1>
                <h4 className="text-white text-start text-xl font-bold tracking-wide">
                  Multiple UPI Merchant.
                </h4>
                <p className="text-white text-start text-lg font-medium tracking-wide">
                  Accept Payments Multiple UPI Merchant.
                </p>
                <h4 className="text-white text-start text-xl font-bold tracking-wide mt-10">
                  Transaction Charge
                </h4>
                <p className="text-white text-start text-lg font-medium tracking-wide">
                  Settlement Directly to your Bank Account.
                </p>
                <h4 className="text-white text-start text-xl font-bold tracking-wide mt-10">
                  Static UPI QR Code
                </h4>
                <p className="text-white text-start text-lg font-medium tracking-wide">
                  Accept Payments Directly Static QR Code.
                </p>
                <h4 className="text-white text-start text-xl font-bold tracking-wide mt-10">
                  Static UPI QR Code
                </h4>
                <p className="text-white text-start text-lg font-medium tracking-wide">
                  Accept Payments At 0% Transaction Fee.
                </p>
                <h4 className="text-white text-start text-xl font-bold tracking-wide mt-10">
                  UPI ID Validation
                </h4>
                <p className="text-white text-start text-lg font-medium tracking-wide">
                  Enter UPI ID and know if it exists. You will receive a
                </p>
              </div>
              <div className="fleft-section  z-10 m-10 top-5 ml-20">
                <img
                  src="https://upimoney.in/3/home/upiapp/upimoney_scan_n_pay.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
