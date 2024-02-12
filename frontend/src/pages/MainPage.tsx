import React from "react";
import MainPageLanding from "../components/MainPageLanding"; // import the MainPageLanding component
import MainPageContent from "../components/MainPageContent";
import MainPageBlog from "../components/MainPageBlog";

const MainPage: React.FC = () => {
  return (
    <>
      <MainPageLanding />
      <MainPageContent />
      <MainPageBlog />
    </>
  );
};

export default MainPage;
