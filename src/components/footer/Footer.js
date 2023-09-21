import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import logo from "../../img/logo.jpeg";

export default function Footer() {
  return (
    <>
      <footer className="bg-white text-black ">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19]">
          {/* <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Free</span> until you're ready to
          launch
        </h1> */}
          <div className="">
            <img src={logo} alt="" className="w-20 rounded-full mb-5" />
          </div>
        </div>
        <ItemsContainer />
        <hr />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center text-gray-400 text-sm py-8"
        >
          <span>© 2023 upimoney.</span>
          <span>Made with ❤ by UPI MONEY</span>
          <SocialIcons Icons={Icons} />
        </div>
      </footer>
    </>
  );
}

// export default Footer;
