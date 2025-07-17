import { Avatar, Box, Grid, Typography } from "@mui/material";

import { useMediaQuery, useTheme } from "@mui/material";
import christopher from "../resources/images/profilbilder/christopher.jpg";
import elida from "../resources/images/profilbilder/elida.jpg";
import ida from "../resources/images/profilbilder/ida.jpg";
import jorgen from "../resources/images/profilbilder/jorgen.jpg";
import magnus from "../resources/images/profilbilder/magnus.png";
import nicholas from "../resources/images/profilbilder/nicholas.jpg";
import torbjorn from "../resources/images/profilbilder/torbjorn.png";

interface Member {
  name: string;
  title: string;
  image: string; // URL to the member's image
}

const members: Member[] = [
  { name: "Magnus Bautz-Holter", title: "Leder", image: magnus },
  { name: "Torbjørn Grande", title: "Nestleder", image: torbjorn },
  {
    name: "Nicholas Selvik",
    title: "Leder for porteføljegruppen",
    image: nicholas,
  },
  {
    name: "Christopher Laloi Dybdahl",
    title: "Leder for kvantegruppen",
    image: christopher,
  },
  { name: "Ida Nikoline Rogne", title: "HR-ansvarlig", image: ida },
  { name: "Jørgen Halvorsen", title: "Arrangementsansvarlig", image: jorgen },
  { name: "Elida Kraggerud", title: "Markedsføringsansvarlig", image: elida },
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
      <Grid container>
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
              {member.title}
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
