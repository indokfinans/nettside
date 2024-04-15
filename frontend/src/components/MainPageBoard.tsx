import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";

import helene from "../resources/images/profilbilder/helene.jpeg"
import johannes from "../resources/images/profilbilder/johannes.jpeg"
import martin from "../resources/images/profilbilder/martin.jpeg"
import mikkel from "../resources/images/profilbilder/mikkel.jpeg"
import bjorn from "../resources/images/profilbilder/bjorn.jpeg"
import eskild from "../resources/images/profilbilder/eskild.jpeg"
import { useTheme, useMediaQuery } from '@mui/material';



interface Member {
    name: string;
    title: string;
    email: string;
    image: string; // URL to the member's image
}

const members: Member[] = [
    { name: "Martin Kristiansen Tømt", title: "Leder", email: "leder@example.com", image: martin },
    { name: "Bjørn Solli Moxnes", title: "Nestleder", email: "co-leder@example.com", image: bjorn },
    { name: "Mikkel Honningsvåg Sandhaug", title: "Porteføljesjef", email: "mikkel@gmail.com", image: mikkel },
    { name: "Eskild Fasseland", title: "Leder Kvantegruppen", email: "kvantitativ@example.com", image: eskild },
    { name: "Helene Lyslo Kristiansen", title: "Bedriftskontakt og Markedsføring", email: "markedsforing@example.com", image: helene },
    { name: "Johannes Kvåle", title: "HR-leder", email: "hr@example.com", image: johannes },
];

const MainPageBoard = () => {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ bgcolor: "background.default", padding: (theme) => theme.spacing(4) }}>
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
                            justifyContent: "center",
                            alignItems: "center",
                            padding: (theme) => theme.spacing(2),
                        }}
                    >
                        <Avatar
                            src={member.image}
                            alt={member.name}
                            sx={{
                                width: { xs: 150, sm: 300 },
                                height: { xs: 150, sm: 300 },
                                mb: 2
                            }}
                        />

                        <Typography variant={isXsScreen ? "body2" : "h5"} gutterBottom color={"secondary"} align="center">
                            {member.name}
                        </Typography>
                        <Typography variant={isXsScreen ? "body1" : "h4"} gutterBottom color={"secondary"} align="center">
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