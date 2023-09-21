import React from "react";
import Navbar from "../components/navbar/Navbar";
import Feature from "./Feature";
import Pricing from "./Pricing";
import Helpdesk from "./Helpdesk";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import whatsapp from "../img/whatsapp.webp";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="pt-[88px]" id="home">
          <div className="w-full h-full bg-gray-50">
            <div className="container home-section">
              <div className=" flex flex-row align-center ">
                <div className="col-md-6 text-md-start text-center p-10 ml-10 left-section">
                  <h1 className="text-white text-4xl text-start font-bold py-10 leading-tight">
                    Accept Payments At <br />
                    0% Transaction Fee
                  </h1>
                  <p
                    className="text-white text-start text-lg font-medium tracking-wide

                  "
                  >
                    Scan and Pay Feature. Accept All UPI Apps.
                    <br />
                    No Transaction Charge. Instant Settlements.
                    <br />
                    Enable Multiple UPI Accounts.
                  </p>
                  <div className="text-start flex items-center text-white font-bold text-base sm:static sm:inset-auto mt-20">
                    <li className=" flex justify-center list-none	bg-green-300 p-2 w-36 -px-4 rounded-sm shadow-xl                      ">
                      <Link to="/login">
                        <ion-icon name="person-outline"></ion-icon>
                        <span className="mx-2">Login Now</span>
                      </Link>
                    </li>
                    <li className="flex justify-center list-none	bg-blue-300 py-2 w-36 -px-4 mx-5	rounded-sm shadow-xl                      ">
                      <Link to="/signup" className="mx-5">
                        <ion-icon name="person-outline"></ion-icon>
                        <span className="mx-2">Register</span>
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="right-section  z-10 mt-14 top-5 ml-20">
                  <img
                    src="https://upimoney.in/3/home/upiapp/upi_section.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center choose-text py-10">
              <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium text-primary-matte-black text-center">
                Accepting Payments Made Easy, Simple & FREE!
              </h1>
              <span className="text-sm md:text-base lg:text-lg text-center w-full max-w-5xl font-normal text-gray-800 pt-5">
                The logos below are the property of respective trademark owners.
                All the below apps support BHIM-UPI.
              </span>
            </div>
          </div>
        </div>
        <Feature />
        <Pricing />
        <Helpdesk />
        <Footer />
      </div>
      <div className="fixed left-2 bottom-2 w-20 z-1000">
        <a href="" className="">
          <img src={whatsapp} alt="" />
        </a>
      </div>
    </>
  );
};

export default Home;
