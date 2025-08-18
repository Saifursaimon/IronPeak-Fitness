import Link from "next/link";
import React from "react";
import { LuDumbbell } from "react-icons/lu";
export default function Header() {
  const listItems = (
    <>
      <li>
        <Link href="">Home</Link>
      </li>
      <li>
        <Link href="">About</Link>
      </li>
      <li>
        <Link href="">Programs</Link>
      </li>
      <li>
        <Link href="">Pricing</Link>
      </li>
      <li className="mt-2">
        <Link href="" className="btn btn-outline btn-sm lg:hidden">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm  text-white  px-5">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl  ">
          {" "}
          <LuDumbbell /> IronPeak <span className="text-primary">Fitness</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{listItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end lg:hidden mt-2">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex items-end font-medium"
          >
            {listItems}
          </ul>
        </div>
        <a className="btn btn-outline   hidden lg:flex">
         Contact
        </a>
      </div>
    </div>
  );
}
