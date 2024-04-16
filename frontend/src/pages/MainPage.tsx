import React from "react";
import MainPageLanding from "../components/MainPageLanding"; 
import MainPageContent from "../components/MainPageContent";
import MainPagePostsSlideShow from "../components/MainPagePostsSlideShow";
import MainPageBoard from "../components/MainPageBoard";
import MainPagePublications from "../components/MainPagePublications";
import MainPageContactForm from "../components/MainPageContactForm";
import Footer from "../components/Footer"; 

const MainPage: React.FC = () => {
  return (
    <div>
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
        <MainPagePostsSlideShow />
      </div>
      <div id="contact">
        <MainPageContactForm />
      </div>
      <div id="madeby">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
