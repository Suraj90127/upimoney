import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const Helpdesk = () => {
  return (
    <>
      <div className="pb-10" id="helpdek">
        <div className="h-full bg-white">
          <div className="helpdesk-section">
            <div className="flex flex-col text-center py-10">
              <h1 className="text-black text-4xl font-bold leading-tight">
                Help Desk
              </h1>
              <p className="text-[#567592] text-lg font-medium tracking-wide text-center px-80 py-10">
                Do you require some help for your project: Integration, Api,
                Accounts, UPI Merchant, Settlement?
              </p>
              <button
                class=" hover:bg-blue-700 text-white font-semibold py-2 mx-[31rem] rounded"
                style={{ backgroundColor: "#79B93C" }}
              >
                <span className="text-lg pt-3">
                  <ion-icon
                    className="pt-3 text-2xl"
                    name="logo-whatsapp"
                  ></ion-icon>
                </span>
                <span className="ml-2 mb-4 text-lg">Chat Our Whatsapp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Helpdesk;
