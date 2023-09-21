import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import "../../App.css";
import { BiSolidUser } from "react-icons/bi";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Featur", href: "#feature", current: false },
  { name: "Pricing", href: "#pricing", current: false },
  { name: "Help Desk", href: "#helpdek", current: false },
  { name: "Try Demo 1₹ Free", href: "/trydemo", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <div
        className="z-20 backdrop-blur-xl shadow-xl"
        style={{ position: "fixed" }}
      >
        <div>
          <Disclosure as="nav" className="">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 py-3 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-end justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <img
                          className="h-16 w-auto rounded-full"
                          src={logo}
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden sm:ml-[110px] sm:block pt-3">
                        <div className="flex space-x-4 ml-44">
                          {navigation.map((item) => (
                            <span className="text-black hover:text-red-500 rounded-md px-3 py-2 text-sm font-medium">
                              <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveNav("#")}
                                className={activeNav === "#" ? "active" : ""}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-white font-bold text-base sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <li className=" flex justify-center list-none	bg-red-400 p-2 w-36 -px-4 rounded-sm shadow-xl                      ">
                        <Link to="/login" className="flex">
                          <span>
                            <BiSolidUser className="mt-0.5 text-lg" />
                          </span>
                          <span className="mx-2">Login Now</span>
                        </Link>
                      </li>

                      <li className="flex justify-center list-none	bg-blue-400 py-2 w-40 -px-4 mx-5	rounded-sm shadow-xl ">
                        <Link to="/signup" className="mx-2 flex">
                          <span>
                            <BiSolidUser className="mt-0.5 text-lg" />
                          </span>
                          <span className="mx-2">Create User</span>
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          "text-black  hover:text-red-500 block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default Navbar;
