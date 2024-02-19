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
    { name: "Martin Kristiansen Tømt", title: "Leder", email: "leder@example.com", image: "https://ca.slack-edge.com/T05QEA0N8ES-U05QM9GNQ90-79784d369169-72" },
    { name: "Bjørn Solli Moxnes", title: "Nestleder", email: "co-leder@example.com", image: "https://media.licdn.com/dms/image/D4D03AQF12DOXMT-V_Q/profile-displayphoto-shrink_800_800/0/1680960602566?e=1713398400&v=beta&t=ANwKP9xdH_DZayr29ZMKB8u0q5FDj_rLE75Un_qJH1g" },
    { name: "Mikkel Honningsvåg Sandhaug", title: "Porteføljesjef", email: "mikkel.honningsvaag.sandhaug@gmail.com", image: "https://media.licdn.com/dms/image/D4D03AQFxP1o9EOuPTw/profile-displayphoto-shrink_800_800/0/1688314760791?e=1713398400&v=beta&t=zkT4phFfFFBPz4BXJJPG7NS-yggbEKf-Q7q-7Z8w6F4" },
    { name: "Eskild Fasseland", title: "Leder Kvantegruppen", email: "kvantitativ@example.com", image: "https://media.licdn.com/dms/image/C5603AQHKV1bgoKJQZw/profile-displayphoto-shrink_200_200/0/1663218159270?e=1713398400&v=beta&t=Xd1eakLd_xhaaBEJ6XT4pHfdeOocXnULii-A5f4Qufk" },
    { name: "Johannes Kvåle", title: "HR-leder", email: "hr@example.com", image: "url-to-image" },
    { name: "Helene Lyslo Kristiansen", title: "Markedsføringsleder", email: "markedsforing@example.com", image: "https://media.licdn.com/dms/image/D4D03AQFpu3oqN1f12A/profile-displayphoto-shrink_800_800/0/1686595406261?e=1713398400&v=beta&t=bpHAtACpeDPDadSF05vldsLVTDunFnY91tehm_OflVE" },
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