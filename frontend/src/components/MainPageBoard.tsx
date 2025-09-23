import { Avatar, Box, Grid, Typography } from "@mui/material";

import { useMediaQuery, useTheme } from "@mui/material";
import anders from "../resources/images/profilbilder/anders.jpg";
import audun from "../resources/images/profilbilder/audun.jpg";
import eskild from "../resources/images/profilbilder/eskild.jpeg";
import isak from "../resources/images/profilbilder/isak.jpg";
// import sondre from "../resources/images/profilbilder/logo.svg";
import maia from "../resources/images/profilbilder/maia.jpg";
import maria from "../resources/images/profilbilder/maria.jpg";

interface Member {
  name: string;
  title: string;
  image: string; // URL to the member's image
}

const members: Member[] = [
  { name: "Isak Haseth", title: "Leder", image: isak },
  { name: "Audun Haukeland", title: "Nestleder", image: audun },
  {
    name: "Anders Bekkevard",
    title: "Porteføljeansvarlig",
    image: anders,
  },
  {
    name: "Eskild T. W. Fassseland",
    title: "Utdanningsansvarlig",
    image: eskild,
  },
  { name: "Maia Øverland", title: "Sosialansvarlig", image: maia },
  // { name: "Sondre Jentoft", title: "Bedriftskontakt", image: sondre },
  {
    name: "Maria Bjørnvik-López",
    title: "Markedsføringsansvarlig",
    image: maria,
  },
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
