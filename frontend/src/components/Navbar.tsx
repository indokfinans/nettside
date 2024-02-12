import React, { useState, useEffect, useRef } from "react";
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
  ButtonBase
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon
import { useTheme } from "@mui/material/styles"; // Import useTheme for accessing the theme
import logo from "../resources/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const scrollToTop = () => {
  scroll.scrollToTop();
};


const logo_box = (
  <Box
    component="img"
    src={logo}
    alt="Logo"
    sx={{
      height: { xs: "50px", md: "90px" },
      width: { xs: "50px", md: "90px" },
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
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  


  const link = (id: string, content: React.ReactNode) => {
    return (
      <Link
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={handleDrawerToggle}
      >
          {content}
      </Link>
    );
  };
  
    useEffect(() => {
      if (navbarRef.current) {
        onHeightChange(`${navbarRef.current.offsetHeight}px`);
      }
    }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Meny
      </Typography>
      <List>
          <ListItem button>
            {link("landing", <ListItemText primary="Hjem" />)}
          </ListItem>
          <ListItem button>
            {link("about", <ListItemText primary="Om oss" />)}
          </ListItem>
          <ListItem button>
            {link("portfolio", <ListItemText primary="Portefølje" />)}
          </ListItem>
          <ListItem button>
            {link("board", <ListItemText primary="Styret" />)}
          </ListItem>
          <ListItem button>
            {link("publications", <ListItemText primary="Publikasjoner" />)}
          </ListItem>
          <ListItem button>
            {link("blog", <ListItemText primary="Nyheter" />)}
          </ListItem>
          <ListItem button>
            {link("contact", <ListItemText primary="Ta kontakt" />)}
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
              {link("about", 
                <ButtonBase>
                  <Box sx={{ color: "inherit" }}>
                    <Typography variant="h6">Om oss</Typography>
                  </Box>
                </ButtonBase>
              )}
              {link("portfolio", 
                <ButtonBase>
                  <Box sx={{ color: "inherit" }}>
                    <Typography variant="h6">Portefølje</Typography>
                  </Box>
                </ButtonBase>
              )}
              {link("board", 
                <ButtonBase>
                  <Box sx={{ color: "inherit" }}>
                    <Typography variant="h6">Styret</Typography>
                  </Box>
                </ButtonBase>
              )}
              {link("blog", 
                <ButtonBase>
                  <Box sx={{ color: "inherit" }}>
                    <Typography variant="h6">Nyheter</Typography>
                  </Box>
                </ButtonBase>
              )}
              {link("publications", 
                <ButtonBase>
                  <Box sx={{ bgcolor: "secondary.main", color: "primary.main", p: 1, borderRadius: 1 }}>
                    <Typography variant="h6">Publikasjoner</Typography>
                  </Box>
                </ButtonBase>
              )}
              {link("contact", 
                <ButtonBase>
                  <Box sx={{ border: "1px solid", borderColor: "inherit", p: 1, borderRadius: 1 }}>
                    <Typography variant="h6">Ta kontakt</Typography>
                  </Box>
                </ButtonBase>
              )}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
     <Fab color="secondary" aria-label="scroll back to top" onClick={scrollToTop} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
     <ArrowUpwardIcon />
   </Fab>
 </>
  );
};

export default Navbar;
