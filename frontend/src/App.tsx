import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme/theme";

import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import BlogPostPage from "./pages/BlogPostPage";
import { Box } from "@mui/material";

function App() {
  const [paddingTop, setPaddingTop] = useState('0px');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ paddingTop }}>
          <Navbar onHeightChange={setPaddingTop} />
          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;