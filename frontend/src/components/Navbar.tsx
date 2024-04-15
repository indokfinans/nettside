import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  ButtonBase
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "../resources/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { CustomLink } from "./Link";

const scrollToTop = () => {
  scroll.scrollToTop();
};


const logo_box = (
  <Box
    component="img"
    src={logo}
    alt="Logo"
    sx={{
      height: { xs: "80px", sm: "150px" },
      width: { xs: "80px", sm: "150px" },
    }}
  />
)


interface NavbarProps {
  onHeightChange: (height: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHeightChange }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (navbarRef.current) {
      onHeightChange(`${navbarRef.current.offsetHeight}px`);
    }
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true)
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false)
      }
    };
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScrollTop]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Meny
      </Typography>
      <List>
        <ListItem button>
          <CustomLink id="landing" onClick={handleDrawerToggle}>
            <ListItemText primary="Hjem" />
          </CustomLink>
        </ListItem>
        <ListItem button>
          <CustomLink id="about" onClick={handleDrawerToggle}>
            <ListItemText primary="Om oss" />
          </CustomLink>
        </ListItem>
        <ListItem button>
          <CustomLink id="/portfolio" onClick={handleDrawerToggle}>
            <ListItemText primary="Portefølje" />
          </CustomLink>
        </ListItem>
        <ListItem button>
          <CustomLink id="board" onClick={handleDrawerToggle}>
            <ListItemText primary="Styret" />
          </CustomLink>
        </ListItem>
        <ListItem button>
          <CustomLink id="publications" onClick={handleDrawerToggle}>
            <ListItemText primary="Publikasjoner" />
          </CustomLink>
        </ListItem>
        <ListItem button>
          <CustomLink id="blog" onClick={handleDrawerToggle}>
            <ListItemText primary="Nyheter" />
          </CustomLink>
        </ListItem>
        <ListItem button>
          <CustomLink id="contact" onClick={handleDrawerToggle}>
            <ListItemText primary="Ta kontakt" />
          </CustomLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        ref={navbarRef}
        position="fixed"
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
              <Button
                onClick={() => navigate("/home")}
                style={{ marginLeft: 'auto' }}
              >
                {logo_box}
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate("/home")}>
                {logo_box}
              </Button>
              <Box
                sx={{
                  ml: "auto",
                  color: "secondary",
                  display: "flex",
                  flexDirection: "row",
                  gap: (theme) => theme.spacing(3),
                  alignItems: "center", // Add this line
                }}
              >
                <CustomLink id="about">
                  <ButtonBase>
                    <Box sx={{ color: "inherit" }}>
                      <Typography variant="h6">Om oss</Typography>
                    </Box>
                  </ButtonBase>
                </CustomLink>
                <CustomLink id="/portfolio">
                  <ButtonBase>
                    <Box sx={{ color: "secondary.main" }}>
                      <Typography variant="h6">Portefølje</Typography>
                    </Box>
                  </ButtonBase>
                </CustomLink>
                <CustomLink id="board">
                  <ButtonBase>
                    <Box sx={{ color: "inherit" }}>
                      <Typography variant="h6">Styret</Typography>
                    </Box>
                  </ButtonBase>
                </CustomLink>
                <CustomLink id="blog">
                  <ButtonBase>
                    <Box sx={{ color: "inherit" }}>
                      <Typography variant="h6">Nyheter</Typography>
                    </Box>
                  </ButtonBase>
                </CustomLink>
                <CustomLink id="publications">
                  <ButtonBase>
                    <Box sx={{ bgcolor: "secondary.main", color: "primary.main", p: 1, borderRadius: 1 }}>
                      <Typography variant="h6">Publikasjoner</Typography>
                    </Box>
                  </ButtonBase>
                </CustomLink>
                <CustomLink id="contact">
                  <ButtonBase>
                    <Box sx={{ border: "1px solid", borderColor: "inherit", p: 1, borderRadius: 1 }}>
                      <Typography variant="h6">Ta kontakt</Typography>
                    </Box>
                  </ButtonBase>
                </CustomLink>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      {showScrollTop && (
        <Fab color="secondary" aria-label="scroll back to top" onClick={scrollToTop} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
};

export default Navbar;
