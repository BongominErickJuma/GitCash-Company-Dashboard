import React from "react";
import { SlPeople } from "react-icons/sl";
import Logo from "../../../Assets/logo-white.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";
import { FaLink } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const AboutCompany = () => {
  return (
    <div className="flex flex-wrap p-0">
      {/* Logo Section */}
      <div className="w-full lg:w-1/4 p-4">
        <img src={Logo} alt="company logo" className="w-full" />
      </div>

      {/* Company Details Section */}
      <div className="w-full lg:w-3/4 p-4 flex flex-col justify-center">
        {/* Company Name and Balance */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-700">Cognosphere Dynamics Ltd</h3>
            <p className="text-gray-600 mt-2">Strike balance</p>
          </div>
          <div className="text-right">
            <p className="flex items-center justify-between">
              Balance <IoEyeOutline className="ml-2" />
            </p>
            <h3 className="text-xl font-bold mt-2">UGX: 250,000</h3>
          </div>
        </div>

        {/* Company Info List */}
        <ul className="space-y-2 flex items-center justify-between">
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <SlPeople className="mr-2" />
              <span className="mr-2">20</span>followers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <HiOutlineLocationMarker className="mr-2" />
              Uganda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <FaLink className="mr-2" />
              https://www.cognospheredynamics.co.ug
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <TiMessages className="mr-2" />
              info@cognospheredynamics.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCompany;
