import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import { Link } from "@mui/material";

interface Member {
    name: string;
    title: string;
    email: string;
    image: string; // URL to the member's image
}

const members: Member[] = [
    { name: "Martin", title: "Leder", email: "leder@example.com", image: "url-to-image" },
    { name: "Bjørn", title: "Co-Leder", email: "co-leder@example.com", image: "url-to-image" },
    { name: "Mikkel Honningsvåg Sandhaug", title: "Porteføljesjef", email: "mikkel.honningsvaag.sandhaug@gmail.com", image: "https://media.licdn.com/dms/image/D4D03AQFxP1o9EOuPTw/profile-displayphoto-shrink_800_800/0/1688314760791?e=1713398400&v=beta&t=zkT4phFfFFBPz4BXJJPG7NS-yggbEKf-Q7q-7Z8w6F4" },
    { name: "Eskild", title: "Kvantitativ leder", email: "kvantitativ@example.com", image: "url-to-image" },
    { name: "Johannes", title: "HR-leder", email: "hr@example.com", image: "url-to-image" },
    { name: "Helene", title: "Markedsførings- og PR-leder", email: "markedsforing@example.com", image: "url-to-image" },
];

const MainPageBoard = () => {
    return (
        <Box sx={{ bgcolor: "background.default", padding: (theme) => theme.spacing(4) }}>
            <Typography variant="h1" gutterBottom align="left" color={"orange"}>
                Møt Styret
            </Typography>
            <Grid container>
                {members.map((member, index) => (
                    <Grid
                        item
                        xs={12}
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
                                width: { xs: 200, md: 300 },
                                height: { xs: 200, md: 300 },
                                mb: 2
                            }}
                        />
                        <Typography variant="h5" gutterBottom color={"secondary"}>
                            {member.name}
                        </Typography>
                        <Typography variant="h4" gutterBottom color={"secondary"}>
                            {member.title}
                        </Typography>
                        <Typography variant="body2">
                            <Link href={`mailto:${member.email}`} color="secondary">
                                {member.email}
                            </Link>
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MainPageBoard;