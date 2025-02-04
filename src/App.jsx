import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import People from "./components/pages/people/People";
import Account from "./components/pages/accounts/Account";
import CodePreview from "./components/codeDashboard/CodePreview";
import CodeEditor from "./components/codeDashboard/CodeEditor";
import NewRepository from "./components/pages/projects/NewRepository";
import ImportRepository from "./components/pages/projects/ImportRepository";
import UploadRepository from "./components/pages/projects/UploadRepository";
import Footer from "./components/footer/Footer";
import Repositories from "./components/pages/projects/Repositories";

const App = () => {
  return (
    <>
      <div className="container mx-auto px-20">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/people" element={<People />} />
          <Route path="/account" element={<Account />} />
          <Route path="/new_repository" element={<NewRepository />} />
          <Route path="/import_repository" element={<ImportRepository />} />
          <Route path="/upload_repository" element={<UploadRepository />} />
          <Route path="/view_repo" element={<CodePreview />} />
          <Route path="/code-editor" element={<CodeEditor />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
