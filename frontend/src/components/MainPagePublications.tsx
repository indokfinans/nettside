import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const StyledLink = styled(Link)({
  cursor: 'pointer',
  fontWeight: 'bold', // Add this line
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:active': {
    color: 'darkblue',
  },
});

interface Report {
    title: string;
    type: "Årlig" | "Kvartalsvis";
    url: string;
}

const reports: Report[] = [
    { title: "Årsrapport 2022", type: "Årlig", url: `${process.env.PUBLIC_URL}/publications/infi_annual22.pdf` },
    { title: "Kvartalsrapport Q4 2023", type: "Kvartalsvis", url: `${process.env.PUBLIC_URL}/publications/infi_q423.pdf` },
];

const MainPagePublications = () => {
    return (
        <Box sx={{ bgcolor: "background.paper", padding: (theme) => theme.spacing(4) }}>
            <Typography variant="h1" gutterBottom align="left" color={"text.primary"}>
                Publikasjoner
            </Typography>
            {reports.map((report, index) => (
                <Box key={index} marginBottom={2}>
                    {/* <Link href={report.url} download={`Infi ${report.title}`} color="primary" underline="none" target="_blank" rel="noopener noreferrer"> */}
                    <StyledLink href={report.url} color="info.main" underline="none">
                    <Typography variant="h5" gutterBottom color={"info.main"}>
                        {report.title}
                    </Typography>
                    </StyledLink>
                </Box>
            ))}
        </Box>
    );
};

export default MainPagePublications;