import React from "react";
import { Link } from "react-router-dom";

const ImportRepository = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">
        Import Existing Repository
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="repoURL" className="block font-medium">
            Repository URL
          </label>
          <input
            type="text"
            id="repoURL"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium">
            Your username for your source repository
          </label>
          <input
            type="email"
            id="username"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">
            Password for your source repository
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="repoDescription" className="block font-medium">
            Description
          </label>
          <textarea
            id="repoDescription"
            rows="3"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter a description for the repository"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="repoPrice" className="block font-medium">
            Contributor Payment
          </label>
          <input
            type="number"
            id="repoPrice"
            min="0"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="repoSkills" className="block font-medium">
            Required Skills
          </label>
          <input
            type="text"
            id="repoSkills"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <small className="text-gray-500">
            Separate skills with commas (e.g., React, Node.js, PostgreSQL)
          </small>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Import
          </button>
          <button
            type="reset"
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-gray-700">Or</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link
            to="/upload_repository"
            className="text-blue-600 hover:underline"
          >
            Upload from Local Machine
          </Link>
          <Link to="/new_repository" className="text-blue-600 hover:underline">
            Create a New Repository
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportRepository;
