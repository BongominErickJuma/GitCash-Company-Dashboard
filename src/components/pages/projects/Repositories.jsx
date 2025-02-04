import React from "react";
import repoDetails from "./repoDetails";
import "./Repositories.css";
import { Link } from "react-router-dom";

const Repositories = () => {
  return (
    <div className="repositories my-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-4xl text-teal-800 mb-4">Project Repositoies</h3>
        <Link
          to="/new_repository"
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
        >
          Add Project Repository
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repoDetails.map((repo, inx) => (
          <Link to="/people" key={inx} className="block">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold capitalize">
                    {repo.name}
                  </h3>
                  <div className="flex justify-between items-center space-x-2">
                    <ul className="flex">
                      {repo.people.map((personImage, idx) => (
                        <li
                          key={idx}
                          className={`-ml-3 ${idx === 0 ? "ml-0" : ""}`}
                        >
                          <img
                            src={personImage}
                            alt="contributor"
                            className="w-10 h-10 rounded-full border-2 border-white"
                          />
                        </li>
                      ))}
                    </ul>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
                      {repo.privacy}
                    </button>
                  </div>
                </div>

                <p className="text-gray-600">{repo.description}</p>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm text-gray-500">{repo.languages}</h5>
                  <h3 className="text-lg font-bold">{repo.amountRemaining}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
