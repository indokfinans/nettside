import React from "react";
import MainPageLanding from "../components/MainPageLanding"; // import the MainPageLanding component
import MainPageContent from "../components/MainPageContent";
import MainPageBlog from "../components/MainPageBlog";
import MainPageBoard from "../components/MainPageBoard";
import MainPagePublications from "../components/MainPagePublications";

const MainPage: React.FC = () => {
  return (
    <>
      <div id="landing">
        <MainPageLanding />
      </div>
      <div id="about">
        <MainPageContent />
      </div>
      <div id="board">
        <MainPageBoard />
      </div>
      <div id="publications">
        <MainPagePublications />
      </div>
      <div id="blog">
        <MainPageBlog />
      </div>
    </>
  );
};

export default MainPage;
