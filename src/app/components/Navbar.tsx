"use client";

import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";
import {AiOutlineHome} from "react-icons/ai"
import { LuLayoutDashboard } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-300 p-4">
        <ul className="flex justify-evenly text-2xl font-bold">
          <li>
            <Link href="/api/auth/signin">Sign In</Link>
          </li>
          <li>
            <Link href="/client">Client</Link>
          </li>
        </ul>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 border-r-2 border-black">
          <div className="flex flex-col item-center">
            <div className="flex mb-2 justify-start items-center gap-4 cursor-pointer m-auto text-base text-gray-800 hover:bg-gray-500 px-3 py-1 rounded-md font-semibold">
              <AiOutlineHome size={20} />
              <Link
                href="/home"
                className="text-base text-gray-800 hover:bg-gray-500 px-3 py-2 rounded-md font-semibold"
              >
                Home
              </Link>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 cursor-pointer m-auto text-base text-gray-800 hover:bg-gray-500 px-3 py-1 rounded-md font-semibold">
              <LuLayoutDashboard size={20} />
              <Link
                href="/"
                className="text-base text-gray-800 hover:bg-gray-500 px-3 py-2 rounded-md font-semibold"
              >
                Dashboard
              </Link>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 cursor-pointer m-auto text-base text-gray-800 hover:bg-gray-500 px-3 py-2 rounded-md font-semibold">
                <RiLogoutCircleLine size={20} />
              <div>
                <Link className="" href="/api/auth/signout">
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
