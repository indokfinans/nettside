import React from "react";
import MainPageLanding from "../components/MainPageLanding"; // import the MainPageLanding component
import MainPageContent from "../components/MainPageContent";
import MainPageBlog from "../components/MainPageBlog";
import MainPageBoard from "../components/MainPageBoard";
import MainPagePublications from "../components/MainPagePublications";
import MainPageContactForm from "../components/MainPageContactForm";
import { Box, Typography } from "@mui/material";

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
        <MainPageBlog />
      </div>
      <div id="contact">
        <MainPageContactForm />
      </div>
      <div id="madeby">
        <Box sx={{ bgcolor: "background.default", p: 4 }}>
          <Typography variant="body1" gutterBottom align="center" color={"secondary.main"}>
            Utviklet av Jørgen og Simen Sandhaug.<br/>
            Design av Hans Kristian Bjørgo Kværum
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default MainPage;
