import React from "react";
import { Link, Box, Typography, Button, Grid, Stack } from "@mui/material";
import top_right from "../resources/images/top_right_3.jpeg";
import carnegie_logo from "../resources/images/carnegie_logo.svg";
import dnb_markets_logo from "../resources/images/dnb_markets_logo.svg";
import facebookLogo from "../resources/images/facebook_logo.svg";
import instagramLogo from "../resources/images/instagram_logo.svg";
import linkedinLogo from "../resources/images/linkedIn_logo.svg";

import { ButtonBase } from "@mui/material";


import { link } from "./Link";

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
          sm={12}
          lg={6}
          p={0}
          m={0}
          sx={{
            px: { xs: 2, sm: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ "& > :not(style)": { mb: { xs: 2, sm: 4 } } }}>
            <Typography variant="h1" color="text.secondary" gutterBottom>
             {"Sammen skaper vi\t"}
              <Box
                component="span"
                color={"text.primary"}
                sx={{
                  display: "inline-block",
                  backgroundColor: "error.main",
                  transform: "skew(-10deg)",
                  padding: "0 4px",
                }}
              >
                meravkastning.
              </Box>
            </Typography>
            <Typography variant="h4" color="text.secondary">
              Børsklubben for finansinteresserte studenter ved Industriell
              økonomi og teknologiledelse (indøk) ved NTNU, Trondheim.
            </Typography>
            <Stack direction="row" spacing={2}>
              {link("publications", 
                <ButtonBase>
                  <Box sx={{ bgcolor: "secondary.main", color: "primary.main", p: 1, borderRadius: 1 }}>
                    <Typography variant="button">Årsrapport</Typography>
                  </Box>
                </ButtonBase>
              )}
              {link("about", 
                <ButtonBase>
                  <Box sx={{ border: "1px solid", borderColor: "#ffffff", p: 1, borderRadius: 1 }}>
                    <Typography variant="button" sx={{ color: "#ffffff" }}>Om oss</Typography>
                  </Box>
                </ButtonBase>
              )}
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box
            component="img"
            src={top_right}
            alt="Landing Image"
            width={{ xs: "100%", sm: "100%" }}
            // minWidth={"700px"}
            height={"auto"}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row" },
            justifyContent: { xs: "center", sm: "left" },
            alignItems: "center",
          }}
        >
          <Link href="https://www.carnegie.no/" target="_blank" rel="noopener noreferrer"
            sx={{
              width: { xs: "50%", sm: "15%" },
              //   mt: { xs: 0.5, sm: 0 },
              //   ml: { xs: 0, sm: 0.5 },
              pr: (theme) => theme.spacing(2),
              pl: (theme) => theme.spacing(2),
            }}
            >
          <Box
            component="img"
            src={carnegie_logo}
            alt="Carnegie Logo"
          />
          </Link>
          <Link href="https://www.dnb.no/markets" target="_blank" rel="noopener noreferrer"
            sx={{
              width: { xs: "50%", sm: "15%" },
              //   mt: { xs: 0.5, sm: 0 },
              //   ml: { xs: 0, sm: 0.5 },
              pr: (theme) => theme.spacing(2),
              pl: (theme) => theme.spacing(2),
            }}
            >
          <Box
            component="img"
            src={dnb_markets_logo}
            alt="DNB Markets Logo"
          />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "right" },
            flexDirection: { xs: "row", sm: "row" },
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
            <Link
              href="https://www.instagram.com/indokfinans"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              color="secondary"
            >
              @indokfinans
            </Typography>
            </Link>
            <Link
              href="https://www.instagram.com/indokfinans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={instagramLogo}
                alt="Instagram Logo"
                sx={{
                  width: { xs: "25px", sm: "35px" },
                  height: { xs: "25px", sm: "35px" },
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Link
              href="https://www.facebook.com/IndokFinansklubb"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Typography
              variant="h6"
              color="secondary"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              InFi - Indøk Finansklubb
            </Typography>
            </Link>
            <Link
              href="https://www.facebook.com/IndokFinansklubb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={facebookLogo}
                alt="Facebook Logo"
                sx={{
                  width: { xs: "25px", sm: "35px" },
                  height: { xs: "25px", sm: "35px" },
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Link
              href="https://www.linkedin.com/company/indokfinans"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              color="secondary"
            >
              InFi - Indøk Finansklubb
            </Typography>
            </Link>
            <Link
              href="https://www.linkedin.com/company/indokfinans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={linkedinLogo}
                alt="LinkedIn Logo"
                sx={{
                  width: { xs: "25px", sm: "35px" },
                  height: { xs: "25px", sm: "35px" },
                }}
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPageLanding;
