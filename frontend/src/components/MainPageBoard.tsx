import { Avatar, Box, Grid, Typography } from "@mui/material";

import { useMediaQuery, useTheme } from "@mui/material";
import christian from "../resources/images/profilbilder/christian.jpeg";
import ida from "../resources/images/profilbilder/ida_rogne.jpeg";
import maren from "../resources/images/profilbilder/maren.jpeg";
import peter from "../resources/images/profilbilder/peter.jpeg";
import stenMagnus from "../resources/images/profilbilder/sten_magnus.jpeg";
import susanne from "../resources/images/profilbilder/susanne.jpeg";
import tereza from "../resources/images/profilbilder/tereza.jpeg";

interface Member {
  name: string;
  title: string;
  image: string; // URL to the member's image
}

const members: Member[] = [
  { name: "Ida Nikoline Rogne", title: "Leder", image: ida },
  {
    name: "Sten Magnus Trovåg Wedum",
    title: "Nestleder",
    image: stenMagnus,
  },
  {
    name: "Christian Myhre Knutson",
    title: "Porteføljeansvarlig",
    image: christian,
  },
  { name: "Peter Mikalsen", title: "Utdanningsansvarlig", image: peter },
  { name: "Maren Milla Reinemo", title: "Sosialansvarlig", image: maren },
  {
    name: "Tereza Van Myhra",
    title: "Markedsføringsansvarlig",
    image: tereza,
  },
  { name: "Susanne Torhaug", title: "Bedriftskontakt", image: susanne },
];

const MainPageBoard = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        padding: (theme) => theme.spacing(4),
      }}
    >
      <Typography variant="h1" gutterBottom align="left" color={"error.main"}>
        Møt Styret
      </Typography>
      <Grid container justifyContent="center">
        {members.map((member, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Change this line
              alignItems: "center",
              padding: (theme) => theme.spacing(2),
            }}
          >
            <Avatar
              src={member.image}
              alt={member.name}
              className="portrait-enhanced"
              sx={{
                width: { xs: 150, sm: 300 },
                height: { xs: 150, sm: 300 },
                mb: 2,
              }}
            />

            <Typography
              variant={isXsScreen ? "body2" : "h5"}
              gutterBottom
              color={"secondary"}
              align="center"
            >
              {""}
              {member.name}
            </Typography>
            <Typography
              variant={isXsScreen ? "body1" : "h4"}
              gutterBottom
              color={"secondary"}
              align="center"
            >
              {/* Soft hyphen so long titles wrap before "ansvarlig" on mobile */}
              {member.title.replace("ansvarlig", "­ansvarlig")}
            </Typography>
            {/* <Typography variant="body2">
                            <Link href={`mailto:${member.email}`} color="secondary">
                                {member.email}
                            </Link>
                        </Typography> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainPageBoard;
