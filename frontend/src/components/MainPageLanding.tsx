import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import top_right from "../resources/images/top_right.png";
import carnegie_logo from "../resources/images/carnegie_logo.svg";
import dnb_markets_logo from "../resources/images/dnb_markets_logo.svg";
import facebookLogo from "../resources/images/facebook_logo.svg";
import instagramLogo from "../resources/images/instagram_logo.svg";
import linkedinLogo from "../resources/images/linkedIn_logo.svg";

const MainPageLanding = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
      }}
    >
      <Grid container justifyContent={"center"}>
        {/* Main headline, description, buttons, and logos */}
        <Grid
          item
          xs={12}
          md={6}
          p={0}
          m={0}
          sx={{
            px: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ "& > :not(style)": { mb: { xs: 2, md: 4 } } }}>
            <Typography variant="h1" color="text.secondary" gutterBottom>
              Kompromissløs avkastning for en
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  backgroundColor: "error.main",
                  transform: "skew(-10deg)",
                  padding: "0 4px",
                }}
              >
                bedre verden.
              </Box>
            </Typography>
            <Typography variant="h4" color="text.secondary">
              Børsklubben for finansinteresserte studenter ved Industriell
              økonomi og teknologiledelse (indøk) ved NTNU, Trondheim.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="secondary">
                Årsrapport
              </Button>
              <Button variant="outlined" color="secondary">
                Om oss
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box
            component="img"
            src={top_right}
            alt="Landing Image"
            width={{ xs: "100%", md: "75%" }}
            minWidth={"500px"}
            height="auto"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            justifyContent: { xs: "center", md: "left" },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={carnegie_logo}
            alt="Carnegie Logo"
            sx={{
              width: { xs: "50%", md: "15%" },
              //   mb: { xs: 0.5, md: 0 },
              //   mr: { xs: 0, md: 0.5 },
              pr: (theme) => theme.spacing(2),
              pl: (theme) => theme.spacing(2),
            }} // margin right on medium screens, bottom margin on small screens
          />
          <Box
            component="img"
            src={dnb_markets_logo}
            alt="DNB Markets Logo"
            sx={{
              width: { xs: "50%", md: "15%" },
              //   mt: { xs: 0.5, md: 0 },
              //   ml: { xs: 0, md: 0.5 },
              pr: (theme) => theme.spacing(2),
              pl: (theme) => theme.spacing(2),
            }} // margin left on medium screens, top margin on small screens
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "right" },
            flexDirection: { xs: "row", md: "row" },
            p: (theme) => theme.spacing(2),
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "block" } }}
              color="secondary"
            >
              @indokfinans
            </Typography>
            <a
              href="https://www.instagram.com/indokfinans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={instagramLogo}
                alt="Instagram Logo"
                sx={{
                  width: { xs: "25px", md: "35px" },
                  height: { xs: "25px", md: "35px" },
                }}
              />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "block" } }}
              color="secondary"
            >
              InFi - Indøk Finansklubb
            </Typography>
            <a
              href="https://www.facebook.com/IndokFinansklubb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={facebookLogo}
                alt="Facebook Logo"
                sx={{
                  width: { xs: "25px", md: "35px" },
                  height: { xs: "25px", md: "35px" },
                }}
              />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "block" } }}
              color="secondary"
            >
              InFi - Indøk Finansklubb
            </Typography>
            <a
              href="https://www.linkedin.com/company/indokfinans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={linkedinLogo}
                alt="LinkedIn Logo"
                sx={{
                  width: { xs: "25px", md: "35px" },
                  height: { xs: "25px", md: "35px" },
                }}
              />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPageLanding;
