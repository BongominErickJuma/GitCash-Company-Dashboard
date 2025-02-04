import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

const UploadRepository = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">
        Upload Repository from Local Machine
      </h2>
      <form>
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Choose Repository Files
          </label>
          <div
            {...getRootProps()}
            className={`border border-dashed p-6 rounded-lg cursor-pointer ${
              isDragActive ? "bg-gray-100" : ""
            }`}
          >
            <input {...getInputProps()} multiple />
            {isDragActive ? (
              <p className="text-gray-700">Drop the files here...</p>
            ) : (
              <p className="text-gray-500">
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="repoDescription" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            className="w-full p-2 border rounded-lg"
            id="repoDescription"
            rows="3"
            placeholder="Enter a description for the repository"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="repoPrice" className="block font-medium mb-2">
            Contributor Payment
          </label>
          <input
            type="number"
            id="repoPrice"
            min="0"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="repoSkills" className="block font-medium mb-2">
            Required Skills
          </label>
          <input
            type="text"
            id="repoSkills"
            className="w-full p-2 border rounded-lg"
          />
          <small className="text-gray-500">
            Separate skills with commas (e.g., React, Node.js, PostgreSQL)
          </small>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Upload Repository
          </button>
          <button
            type="reset"
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-start space-x-4 text-blue-600">
          <Link to="/import_repository" className="hover:underline">
            Import Existing Repository
          </Link>
          <span className="font-semibold">Or</span>
          <Link to="/new_repository" className="hover:underline">
            Create a new Repository
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UploadRepository;
