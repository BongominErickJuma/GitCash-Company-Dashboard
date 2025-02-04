import React from "react";
import "./People.css";
import peopleDetails from "./peopleDetails";
import { Link } from "react-router-dom";

const ActivePeople = () => {
  return (
    <div className="people my-5">
      <h3 className="text-4xl text-teal-800 mb-4">Most Active Contributors</h3>

      {peopleDetails.slice(0, 6).map((person, inx) => (
        <div key={inx}>
          <div className="shadow-md hover:shadow-lg transition-shadows rounded-md my-3 p-6">
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

      <Link
        to="/people"
        className="bg-gray-300 text-gray-700 text-center font-bold px-4 py-2 rounded-md block w-full "
      >
        View All
      </Link>
    </div>
  );
};

export default ActivePeople;
