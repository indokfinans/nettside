import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import { Link } from "@mui/material";

import helene from "../resources/images/profilbilder/helene.jpeg"
import johannes from "../resources/images/profilbilder/johannes.jpeg"
import martin from "../resources/images/profilbilder/martin.jpeg"
import mikkel from "../resources/images/profilbilder/mikkel.jpeg"
import bjorn from "../resources/images/profilbilder/bjorn.jpeg"
import eskild from "../resources/images/profilbilder/eskild.jpeg"

interface Member {
    name: string;
    title: string;
    email: string;
    image: string; // URL to the member's image
}

const members: Member[] = [
    { name: "Johannes Kvåle", title: "HR-leder", email: "hr@example.com", image: johannes },
    { name: "Helene Lyslo Kristiansen", title: "Markedsføringsleder", email: "markedsforing@example.com", image: helene },
    { name: "Martin Kristiansen Tømt", title: "Leder", email: "leder@example.com", image: martin },
    { name: "Mikkel Honningsvåg Sandhaug", title: "Porteføljesjef", email: "mikkel@gmail.com", image: mikkel },
    { name: "Bjørn Solli Moxnes", title: "Nestleder", email: "co-leder@example.com", image: bjorn },
    { name: "Eskild Fasseland", title: "Leder Kvantegruppen", email: "kvantitativ@example.com", image: eskild },
];

const MainPageBoard = () => {
    return (
        <Box sx={{ bgcolor: "background.default", padding: (theme) => theme.spacing(4) }}>
            <Typography variant="h1" gutterBottom align="left" color={"error.main"}>
                Møt Styret
            </Typography>
            <Grid container>
                {members.map((member, index) => (
                    <Grid
                        item
                        xs={12}
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
                                width: { xs: 200, sm: 300 },
                                height: { xs: 200, sm: 300 },
                                mb: 2
                            }}
                        />
                        <Typography variant="h5" gutterBottom color={"secondary"}>
                            {member.name}
                        </Typography>
                        <Typography variant="h4" gutterBottom color={"secondary"}>
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