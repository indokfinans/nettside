import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme/theme";

import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import BlogPostPage from "./components/BlogPostPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
