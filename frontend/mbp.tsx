import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export const MacbookPro = () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      {/* Header Section with Background Images */}
      <Box sx={{ position: "relative", height: "1117px" }}>
        <Box sx={{ bgcolor: "#d9d9d9", height: "89px", mt: "37px" }} />
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "1117px",
          }}
          src="https://c.animaapp.com/Gk9yvO1z/img/mask-group-4.png"
          alt="Background"
        />
        <img
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "952px",
          }}
          src="https://c.animaapp.com/Gk9yvO1z/img/mask-group-5.png"
          alt="Main"
        />

        {/* Text and Buttons */}
        <Stack
          direction="column"
          spacing={2}
          sx={{
            position: "absolute",
            top: "308px",
            left: "73px",
            color: "white",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "82px" }}>
            Kompromissløs avkastning for en verre verden.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "24px" }}>
            Børsklubben for finansinteresserte studenter ved Industriell økonomi
            og teknologiledelse (indøk) ved NTNU, Trondheim.
          </Typography>
          <Button variant="contained" sx={{ bgcolor: "primary.main" }}>
            Årsrapport
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", ml: 2 }}
          >
            Om oss
          </Button>
        </Stack>
      </Box>

      {/* Additional Elements as described, without absolute positioning for a more responsive design */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <img
            src="https://c.animaapp.com/Gk9yvO1z/img/vector.svg"
            alt="Vector"
          />
          <Typography sx={{ color: "white" }}>Om oss</Typography>
          <Typography sx={{ color: "white" }}>Veldedighetsfond</Typography>
          <Typography sx={{ color: "white" }}>Blogg</Typography>
          <Typography sx={{ color: "white" }}>Publikasjoner</Typography>
          <Typography sx={{ color: "white" }}>For bedrifter</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {/* Social Media Icons and Info */}
          <img
            src="https://c.animaapp.com/Gk9yvO1z/img/instagram-seeklogo-com-1.svg"
            alt="Instagram"
          />
          <img
            src="https://c.animaapp.com/Gk9yvO1z/img/facebook-icon-2013-1.svg"
            alt="Facebook"
          />
          <img
            src="https://c.animaapp.com/Gk9yvO1z/img/linkedin-icon-1.svg"
            alt="LinkedIn"
          />
          {/* More icons and text elements as needed */}
        </Box>
      </Box>

      {/* Further content and layout adjustments as needed for full replication */}
    </Box>
  );
};
