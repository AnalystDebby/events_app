import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo_black.png";

export const Nav = () => {
  return (
    <header className="h-72 py-4 px-8">
      <div className="w-full max-w-7xl m-auto flex flex-col justify-between">
        <nav className="flex justify-between items-center ">
          <Image src={logo} alt="logo" width={50} height={50} />

          <ul className="flex gap-4">
            <li className="font-semibold text-base">
              <Link href="/">Home</Link>
            </li>
            <li className="font-semibold text-base">
              <Link href="/events">Events</Link>
            </li>
            <li className="font-semibold text-base">
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="w-1/2 text-4xl uppercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </header>
  );
};
