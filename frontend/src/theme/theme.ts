import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          '&::placeholder': {
            color: 'black',
          },
          '&:focus::placeholder': {
            color: 'black',
          },
          color: 'white',
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1f3553",
    },
    secondary: {
      main: "#f2f2f2",
    },
    error: {
      main: "#ff3131",
    },
    info: {
      // orange/yellow
      main: "#ff9e00",
    },
    background: {
      default: "#1b2740",
      paper: "#f2f2f2",
    },
    text: {
      primary: "#182c49",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Inter', Helvetica, Arial, sans-serif",
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
