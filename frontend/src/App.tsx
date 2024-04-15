import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import theme from "./theme/theme";

import LookerStudioEmbed from "./components/LookerStudioEmbed";

import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  const [paddingTop, setPaddingTop] = useState('0px');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ paddingTop }}>
          <Navbar onHeightChange={setPaddingTop} />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} /> {/* Redirect root to /home */}
            <Route path="/home" element={<MainPage />} />
            <Route path="/portfolio" element={<LookerStudioEmbed />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
