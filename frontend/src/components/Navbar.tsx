import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon
import { useTheme } from "@mui/material/styles"; // Import useTheme for accessing the theme
import logo from "../resources/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Meny
      </Typography>
      <List>
        <ListItem button onClick={() => navigate("/home")}>
          <ListItemText primary="Hjem" />
        </ListItem>
        <ListItem button onClick={() => navigate("/about")}>
          <ListItemText primary="Om oss" />
        </ListItem>
        <ListItem button onClick={() => navigate("/fund")}>
          <ListItemText primary="Veldedighetsfond" />
        </ListItem>
        <ListItem button onClick={() => navigate("/blog")}>
          <ListItemText primary="Blogg" />
        </ListItem>
        <ListItem button onClick={() => navigate("/publications")}>
          <ListItemText primary="Publikasjoner" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "background.default",
        boxShadow: 0,
        padding: 0,
      }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <>
            <Button onClick={() => navigate("/home")}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: { xs: "50px", md: "90px" },
                  width: { xs: "50px", md: "90px" },
                }}
              />
            </Button>
            <Box
              sx={{
                ml: "auto",
                color: "secondary",
                display: "flex",
                flexDirection: "row",
                gap: (theme) => theme.spacing(1),
              }}
            >
              <Button
                onClick={() => navigate("/about")}
                sx={{ color: "inherit" }}
              >
                <Typography variant="h6">Om oss</Typography>
              </Button>
              <Button
                onClick={() => navigate("/fund")}
                sx={{ color: "inherit" }}
              >
                <Typography variant="h6">Veldedighetsfond</Typography>
              </Button>
              <Button
                onClick={() => navigate("/blog")}
                sx={{ color: "inherit" }}
              >
                <Typography variant="h6">Blogg</Typography>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/publications")}
              >
                <Typography variant="h6">Publikasjoner</Typography>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => navigate("/relations")}
              >
                <Typography variant="h6">For Bedrifter</Typography>
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
