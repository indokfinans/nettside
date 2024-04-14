// src/components/Footer.tsx
import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import facebookLogo from "../resources/images/facebook_logo.svg";
import instagramLogo from "../resources/images/instagram_logo.svg";
import linkedinLogo from "../resources/images/linkedIn_logo.svg";

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.secondary', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" mt={2} fontWeight="bold">Forretningsadresse</Typography>
          <Typography>c/o Hovedstyret Indøk NTNU</Typography>
          <Typography>Kolbjørn Hejes vei 1E</Typography>
          <Typography>7034 Trondheim</Typography>

          <Typography variant="h6" mt={2} fontWeight="bold">Postadresse</Typography>
          <Typography>c/o Martin Kristiansen Tømt</Typography>
          <Typography>Øystein Møylas veg 2</Typography>
          <Typography>7031 Trondheim</Typography>

          <Typography variant="h6" mt={2} fontWeight="bold">Org. nr.</Typography>
          <Typography>Indøk Finansklubb</Typography>
          <Typography>930 225 894</Typography>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">Sosiale medier</Typography>
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
                  mr: 2, // Add margin-right here
                }}
              />
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
                  mr: 2, // Add margin-right here
                }}
              />
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

          <br/>
          <br/>
          <Typography variant="body1" gutterBottom color={"secondary.main"}>
            Utviklet av Jørgen Sandhaug og Simen Sandhaug.<br/>
            Design av Hans Kristian Bjørgo Kværum.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;