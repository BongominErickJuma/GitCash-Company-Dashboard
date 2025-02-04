import React, { useState } from "react";
import {
  LuBuilding,
  LuChevronDown,
  LuCloudUpload,
  LuEye,
  LuFileQuestion,
  LuGitBranchPlus,
  LuPanelsTopLeft,
  LuServer,
  LuSettings,
  LuShield,
} from "react-icons/lu";

const Settings = () => {
  const [isOpen, setIsOpen] = useState({
    manage: false,
    build: false,
    secure: false,
    deploy: false,
    operate: false,
    monitor: false,
    analyse: false,
    settings: false,
  });

  const toggleOpen = (item) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const chevronStyle = (isOpen) => ({
    transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)",
    transition: "transform 0.3s ease-in-out",
  });

  return (
    <div className="card mt-3">
      <div className="m-2">
        <h5>Project</h5>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li className="flex items-center justify-between">
            <div>
              <LuPanelsTopLeft className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Manage
              </a>
            </div>
            {/* Add Chevron only if there are children */}

            <LuChevronDown
              style={chevronStyle(isOpen.manage)}
              onClick={() => toggleOpen("manage")}
            />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuBuilding className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Build
              </a>
            </div>

            <LuChevronDown
              style={chevronStyle(isOpen.build)}
              onClick={() => toggleOpen("build")}
            />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuShield className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Secure
              </a>
            </div>
            <LuChevronDown
              style={chevronStyle(isOpen.secure)}
              onClick={() => toggleOpen("secure")}
            />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuCloudUpload className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Deploy
              </a>
            </div>
            <LuChevronDown
              style={chevronStyle(isOpen.deploy)}
              onClick={() => toggleOpen("deploy")}
            />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuServer className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Operate
              </a>
            </div>

            <LuChevronDown
              style={chevronStyle(isOpen.operate)}
              onClick={() => toggleOpen("operate")}
            />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuEye className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Monitor
              </a>
            </div>

            <LuChevronDown
              style={chevronStyle(isOpen.monitor)}
              onClick={() => toggleOpen("monitor")}
            />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuGitBranchPlus className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Analyse
              </a>
            </div>

            <LuChevronDown
              style={chevronStyle(isOpen.analyse)}
              onClick={() => toggleOpen("analyse")}
            />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuSettings className="inline m-2" />
              <a href="#" className="text-dark link-info">
                Settings
              </a>
            </div>
            <LuChevronDown
              style={chevronStyle(isOpen.settings)}
              onClick={() => toggleOpen("settings")}
            />
          </li>
          <li>
            <hr />
          </li>
          <li className="flex items-center justify-between">
            <div>
              <LuFileQuestion className="m-2 inline" />

              <a href="#" className="text-dark link-info">
                Help
              </a>
            </div>
            {/* Help does not have children, no chevron needed */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
