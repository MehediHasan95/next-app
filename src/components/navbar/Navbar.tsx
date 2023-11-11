"use client";

import Link from "next/link";
import { useState } from "react";
import ServicesPopup from "./ServicesPopup";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Review",
    path: "/review",
  },
  {
    name: "About",
    path: "/about",
  },
];

function Navbar() {
  const [service, setService] = useState<string>("");

  return (
    <div
      onMouseLeave={() => setService("")}
      className="navbar bg-base-100 max-w-screen-2xl mx-auto"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-10 p-2 mt-3 w-52 space-y-3 shadow-lg rounded-box bg-base-100"
          >
            {navItems.map(({ name, path }, index) => (
              <>
                <li
                  key={index}
                  onMouseEnter={() => setService(name)}
                  className="px-3 font-semibold hover:text-red-500"
                >
                  <Link href={path}>{name}</Link>
                </li>
                {service === "Services" && (
                  <ul
                    className={`${service === name ? "block" : "hidden"} ps-5`}
                  >
                    <li className="hover:underline">
                      <Link href="/">Bike</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/">Car</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/">Food</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/">Parcel</Link>
                    </li>
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
        <h1 className="text-xl">Ride360</h1>
      </div>
      <div className="navbar-center hidden lg:flex relative">
        <ul className="flex space-x-3">
          {navItems.map(({ name, path }, index) => (
            <li
              onMouseEnter={() => setService(name)}
              key={index}
              className="px-3 font-semibold hover:text-red-500"
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <ServicesPopup service={service} />
      </div>
      <div className="navbar-end">
        <button className="bg-red-500 text-white w-3/6 lg:w-3/12 py-1 lg:py-2 rounded-full">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
