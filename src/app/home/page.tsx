import React from "react";
import Link from "next/link";
import { TfiUser } from "react-icons/tfi";
import { IoEyeSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="mt-8 flow-root w-full ml-44 px-20">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle border rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300 bg-gray-100 rounded-xl">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Users
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  Modifier
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  0001
                </td>
                <td className="whitespace-nowrap py-5 text-sm pl-4 pr-3 text-left">
                  <div className="flex items-center">
                    <div className="border-2 border-black rounded-full w-16 h-16 flex justify-center items-center">
                      <TfiUser size={30} />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium capitalize text-gray-900">
                        John Doe
                      </div>
                      <div className="mt-1 text-gray-500">
                        example@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div className="text-gray-900">20/08/2023</div>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Complète
                  </span>
                </td>
                <td className="text-center text-sm font-medium">
                  <Link href="">
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <IoEyeSharp className="ml-20" size={20} />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  0001
                </td>
                <td className="whitespace-nowrap py-5 text-sm pl-4 pr-3 text-left">
                  <div className="flex items-center">
                    <div className="border-2 border-black rounded-full w-16 h-16 flex justify-center items-center">
                      <TfiUser size={30} />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium capitalize text-gray-900">
                        John Doe
                      </div>
                      <div className="mt-1 text-gray-500">
                        example@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div className="text-gray-900">20/08/2023</div>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Complète
                  </span>
                </td>
                <td className="text-center text-sm font-medium">
                  <Link href="">
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <IoEyeSharp className="ml-20" size={20} />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
