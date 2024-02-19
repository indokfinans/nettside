import React from "react";
import { Box, Typography, Link } from "@mui/material";

const MainPageContactForm: React.FC = () => {
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column",
                p: 2,
                borderRadius: 1,
            }}
        >
            <Typography variant="h1" gutterBottom align="left" color="red">
                Kontakt oss
            </Typography>
            <Typography variant="h4" color="primary">
                Ikke nøl med å ta kontakt med oss, enten du er interessert i å bli medlem, ønsker å samarbeide, eller har andre spørsmål.
                <br />
                <br />
                <Link href="leder@infi.no" color="primary"> {"leder@infi.no"}</Link>
            </Typography>
        </Box>
    );
};

export default MainPageContactForm;