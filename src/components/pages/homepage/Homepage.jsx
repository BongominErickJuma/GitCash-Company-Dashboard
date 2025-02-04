import React from "react";
import AboutCompany from "./AboutCompany";
import PopularRepositories from "../projects/PopularRepositories";
import ActivePeople from "../people/ActivePeople";

const Homepage = () => {
  return (
    <>
      <AboutCompany />
      <PopularRepositories />
      <ActivePeople />
    </>
  );
};

export default Homepage;
