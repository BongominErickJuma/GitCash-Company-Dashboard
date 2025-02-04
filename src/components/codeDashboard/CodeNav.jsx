import React from "react";
import { fileNames, icons, commitMessages, updateTimes } from "./Readme";
import profile from "../../Assets/client-logo.gif";
import Settings from "./Settings";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { IoIosGitNetwork } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { BsActivity, BsClipboard } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

const CodeNav = () => {
  // Define the arrays

  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between">
            <button className="btn ml-0">R</button>
            <h3 className="ml-2">react-mini-dashboards</h3>
            <CiLock />
          </div>

          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="card flex items-center flex-row p-2 mr-2">
                <LuBell />
                <FaChevronDown className="ms-2" />
              </div>
              <div className="card flex items-center flex-row p-2 mr-2">
                <CiStar />
                star
                <span className="mr-2">0</span>
              </div>
              <div className="card flex items-center flex-row p-2">
                <IoIosGitNetwork />
                fork
                <span className="ml-2">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap space-x-4">
        {/* Left Column (Main Content) */}
        <div className="w-full lg:w-8/12">
          {/* Top Row with Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-3">
            <div className="flex items-center">
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 rounded px-3 py-1">
                <IoIosGitNetwork className="mr-2" />
                <span style={{ fontStyle: "normal" }}>main</span>
                <FaChevronDown className="ml-2" />
              </button>
              <h6 className="ml-2">react-mini-dashboards /</h6>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 ml-1">
                <FaPlus />
                <FaChevronDown />
              </button>
            </div>
            <div className="flex space-x-2 mt-2 lg:mt-0">
              <button className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1">
                History
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1">
                Find file
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 rounded px-3 py-1">
                Edit
                <FaChevronDown className="ml-2" />
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 rounded px-3 py-1">
                Code
                <FaChevronDown className="ml-2" />
              </button>
            </div>
          </div>

          {/* Card with Profile and Commit Info */}
          <div className="bg-white shadow rounded-lg mt-3">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                      Update file index.html
                    </a>
                    <p className="text-sm text-gray-600">
                      <a
                        href="#"
                        className="text-gray-800 hover:text-blue-500 mr-2"
                      >
                        John Doe
                      </a>
                      authored 17 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
                  <span>dh47482wkw2</span>
                  <BsClipboard className="ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="max-h-screen overflow-y-scroll my-5">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Last commit</th>
                  <th className="p-2 text-left">Last update</th>
                </tr>
              </thead>
              <tbody>
                {fileNames.map((fileName, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <Link
                        to="/code-editor"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        <i className={`${icons[index]} mr-2`}></i>
                        {fileName}
                      </Link>
                    </td>
                    <td className="p-2">
                      <Link
                        to="/code-editor"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        {commitMessages[index]}
                      </Link>
                    </td>
                    <td className="p-2">{updateTimes[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-full lg:w-3/12 mt-3">
          {/* Card with Links */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-4">
              <h6 className="font-semibold">no description yet</h6>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-800 hover:text-blue-500"
                  >
                    <AiOutlineRead className="mr-2" />
                    Readme
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-800 hover:text-blue-500"
                  >
                    <BsActivity className="mr-2" />
                    Activity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-800 hover:text-blue-500"
                  >
                    <CiStar className="mr-2" />0 Stars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-800 hover:text-blue-500"
                  >
                    <IoEyeOutline className="mr-2" />
                    10 Watchers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-800 hover:text-blue-500"
                  >
                    <IoIosGitNetwork className="mr-2" />0 forks
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Settings Component */}
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default CodeNav;
