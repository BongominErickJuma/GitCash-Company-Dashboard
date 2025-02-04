import React from "react";
import { Link } from "react-router-dom";

const NewRepository = () => {
  return (
    <div className="container mx-auto my-5 px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Start a New Repository</h2>

          <div className="bg-white shadow-md rounded-lg mb-4">
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">
                Import or Upload a Repository
              </h4>
              <p className="text-gray-600 mb-4">
                Already have a project repository elsewhere?
              </p>
              <div className="flex items-center gap-2">
                <Link
                  to="/import_repository"
                  className="text-blue-500 hover:underline"
                >
                  Import Existing Repository
                </Link>
                <b className="text-gray-600">Or</b>
                <Link
                  to="/upload_repository"
                  className="text-blue-500 hover:underline"
                >
                  Upload from Local Machine
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Create a New Repository
              </h3>
              <form className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="repoName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Repository Name
                  </label>
                  <input
                    type="text"
                    id="repoName"
                    placeholder="Enter repository name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="repoDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="repoDescription"
                    rows="3"
                    placeholder="Enter a description for the repository"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="repoPrice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contributor Payment
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="mr-2">$</span>
                    <input
                      type="number"
                      id="repoPrice"
                      placeholder="Set the price offered for contributions"
                      min="0"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="repoSkills"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Required Skills
                  </label>
                  <input
                    type="text"
                    id="repoSkills"
                    placeholder="Enter the skills required for contributors"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <small className="text-sm text-gray-500">
                    Separate skills with commas (e.g., React, Node.js,
                    PostgreSQL)
                  </small>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Create Repository
                  </button>
                  <button
                    type="reset"
                    className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRepository;
