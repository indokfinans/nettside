import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#172F56",
    },
    secondary: {
      main: "#f2f2f2",
    },
    error: {
      main: "#CCE6F7",
    },
    info: {
      main: "#466D8C",
    },
    background: {
      default: "#172F56",
      paper: "#f2f2f2",
    },
    text: {
      primary: "#172F56",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Helvetica Neue', 'Inter', Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "4.5rem", // Adjust the size as needed
      // fontWeight: "bold",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1.4rem",
    },
    body2: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 900, // small devices
      md: 1000, // medium devices
      lg: 1300, // large devices
      xl: 1536, // extra-large devices
    },
  },
});

// Make the font sizes responsive
theme = responsiveFontSizes(theme);

export default theme;
