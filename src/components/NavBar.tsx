"use client";

import Link from "next/link";
import { useState } from "react";
import Model from "./Model";
import TokenList from "./TokenList";

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/swap",
    },
    {
      name: "Tokens",
      link: "/tokens",
    },
    {
      name: "Pools",
      link: "/pools",
    },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [isConnect, setIsConnect] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Uniswap Clone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Search token..."
          className="input input-bordered w-auto ml-1 max-w-xs cursor-text"
        />
      </div>
      <div className="navbar-end space-x-1">
        <a className="btn">Network</a>
        <section className="w-44">{!isConnect && <Model />}</section>
        {isConnect && <TokenList />}
      </div>
    </div>
  );
};

export default NavBar;
