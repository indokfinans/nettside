import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

interface Report {
    title: string;
    type: "Årlig" | "Kvartalsvis";
    url: string;
}

const reports: Report[] = [
    { title: "Årsrapport 2022", type: "Årlig", url: "https://media.licdn.com/dms/document/media/D4D1FAQFKjW3cN35stA/feedshare-document-pdf-analyzed/0/1682355568239?e=1708560000&v=beta&t=BNKqXtpWNNIsJ4HjkrMArxaFzFIkBJxLENJaC33j9_M" },
    { title: "Kvartalsrapport Q4 2023", type: "Kvartalsvis", url: "https://media.licdn.com/dms/document/media/D4D1FAQFhaRV_9l0TNg/feedshare-document-pdf-analyzed/0/1704555296160?e=1708560000&v=beta&t=jAvpOX-n2is7ukrIWzPc_NAorqv_hBSYT21oRm8Vc1Y" },
];

const MainPagePublications = () => {
    const annualReports = reports.filter(report => report.type === "Årlig");
    const quarterlyReports = reports.filter(report => report.type === "Kvartalsvis");

    return (
        <Box sx={{ bgcolor: "background.paper", padding: (theme) => theme.spacing(4) }}>
            <Typography variant="h1" gutterBottom align="left" color={"red"}>
                Publikasjoner
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" gutterBottom color={"primary"}>
                        Årlige rapporter
                    </Typography>
                    {annualReports.map((report, index) => (
                        <Box key={index} marginBottom={2}>
                            <Typography variant="h5" gutterBottom color={"primary"}>
                                {report.title}
                            </Typography>
                            <Link href={report.url} color="primary" underline="none" target="_blank" rel="noopener noreferrer">
                                Last ned PDF
                            </Link>
                        </Box>
                    ))}

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" gutterBottom color={"primary"}>
                        Kvartalsrapporter
                    </Typography>
                    {quarterlyReports.map((report, index) => (
                        <Box key={index} marginBottom={2}>
                            <Typography variant="h5" gutterBottom color={"primary"}>
                                {report.title}
                            </Typography>
                            <Link href={report.url} color="primary" underline="none" target="_blank" rel="noopener noreferrer">
                                Last ned PDF
                            </Link>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainPagePublications;