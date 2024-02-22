import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import middle_right from "../resources/images/middle_right.png"; // Make sure the path is correct

const MainPageContent = () => {
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      {/* <Grid container sx={{ minHeight: "100vh" }}> */}
      <Grid container >
        {" "}
        {/* Ensure the container is at least as tall as the viewport */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // padding: (theme) => theme.spacing(0),
          }}
        >
          <Box sx={{ p: {xs: 2, sm: 4} }}>
            <Typography variant="h1" sx={{ color: "error.main", mb: 2 }}>
              Om Oss
            </Typography>
            <Typography variant="h3" gutterBottom>
              Tidlig eksponering
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Indøk Finansklubb ble etablert våren 2021 for å samle
              finansinteresserte studenter ved Industriell økonomi og
              teknologiledelse (indøk) ved NTNU, Trondheim. Finansklubben består
              av studenter fra alle årstrinn, med hensikt å fasilitere for
              kunnskaps- og erfaringsoverføring på tvers av kullene. Det første
              året etter oppstart forvaltet finansklubben en papirportefølje som
              utkonkurrerte Oslo Børs.
            </Typography>
            {/* <Button variant="contained" color="primary">
              Les mer
            </Button> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ height: 1 }}>
          {" "}
          {/* This makes the item take full height */}
          <Box
            component="img"
            src={middle_right}
            alt="Students in discussion"
            sx={{
              height: "100%", // Make image take full height of the parent
              width: "100%", // Make image take full width of the parent
              display: "block",
              objectFit: "cover", // Ensure the image covers the Box area
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPageContent;
