import React from "react";
import Logo from "../../Assets/logo-white.png";
import clientLogo from "../../Assets/client-logo.gif";
import "./Header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Header = () => {
  return (
    <header id="header" className="header flex items-center sticky-top">
      <div className="container relative flex items-start justify-between border-b pb-2">
        <div>
          <a
            href="index.html"
            className="logo flex items-center mr-auto  xl:mr-auto"
          >
            <img src={Logo} alt="Gitcash Logo Image" />
            <h1 className="text-gray-700">GitCash.</h1>
          </a>
          <Navbar />
        </div>

        <div className="header-social-links flex items-end flex-col">
          <div className="logo flex items-center mr-auto xl:mr-0 ">
            <img src={clientLogo} alt="Gitcash Logo Image" />
            <h1 className="text-gray-700">Cognosphere Dynamics</h1>
          </div>
          <div className="mt-2 justify-self-end">
            <ul className="flex items-end ">
              <li className="mr-3">
                <Link to="new_repository" className="new p-0 m-0">
                  <FaPlus className="inline mr-2" /> New
                </Link>
              </li>
              <li className="me-3">
                <a href="#" className="linkedin p-0 m-0 ">
                  <TiMessages />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="account p-0 m-0"
                  data-bs-toggle="dropdown"
                >
                  <HiOutlineDotsVertical />
                </a>
                {/* <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item py-0" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item py-0" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item py-0" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
