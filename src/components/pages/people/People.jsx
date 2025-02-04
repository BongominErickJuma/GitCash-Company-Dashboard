import React from "react";
import "./People.css";
import peopleDetails from "./peopleDetails";
import { Link } from "react-router-dom";

const People = () => {
  return (
    <div className="people my-5">
      <h3 className="text-4xl text-teal-800 mb-4">Contributors</h3>

      {peopleDetails.map((person, inx) => (
        <div key={inx}>
          <div className="shadow-lg rounded-md my-3 p-6">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
                <img
                  src={person.imageUrl}
                  alt="profile"
                  className="rounded-full"
                />
                <div className="ml-5">
                  <h3 className="text-2xl font-bold text-grey-700">
                    {person.name}
                  </h3>
                  <div className="flex gap-4">
                    <p>
                      <span className="mr-2 text-gray-600">Experience:</span>
                      {person.experience}
                    </p>
                    <div>{person.tools.join(", ")}</div>
                  </div>
                  <p>
                    <span className="mr-2 text-gray-600">Contribution:</span>
                    {person.projects.map((project, idx) => (
                      <Link
                        to={`/view_repo`}
                        key={idx}
                        className="text-blue-600 hover:underline mr-2"
                      >
                        {project}
                        {idx < person.projects.length - 1 && ", "}
                      </Link>
                    ))}
                  </p>
                </div>
              </div>

              <div className="self-center">
                <div className="flex justify-between items-end space-x-4">
                  <div className="activity-graph">
                    {person.contribution.map((contrib, idx) => (
                      <div
                        key={idx}
                        className={`activity-bar ${
                          contrib > 10
                            ? "high"
                            : contrib > 5
                            ? "medium"
                            : contrib > 0
                            ? "low"
                            : "none"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <a
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                    href={person.followLink}
                    target="_blank"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
