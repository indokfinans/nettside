import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const StyledLink = styled(Link)({
    cursor: 'pointer',
    fontWeight: 'bold',
    '&:hover': {
        textDecoration: 'underline',
    },
    '&:active': {
        color: 'darkblue',
    },
});

interface Report {
    title: string;
    url: string;
}

const MainPagePublications = () => {
    const [reports, setReports] = useState<Report[]>([]);

    useEffect(() => {
        const loadReports = async () => {
            const context = (require as any).context('../../public/publications', false, /\.pdf$/);
            const reports: Report[] = context.keys().map((fileName: string) => {
                const title = (fileName.split('/').pop() || '').replace('.pdf', '');
                const url = `${process.env.PUBLIC_URL}/publications/${fileName}`;
                return { title, url };
            });
            setReports(reports);
        };
        loadReports();
    }, []);

    return (
        <Box sx={{ bgcolor: "background.paper", padding: (theme) => theme.spacing(4) }}>
            <Typography variant="h1" gutterBottom align="left" color={"text.primary"}>
                Publikasjoner
            </Typography>
            {reports.map((report, index) => (
                <Box key={index} marginBottom={2}>
                    <StyledLink href={report.url} color="info.main" underline="none" target="_blank" rel="noopener noreferrer">
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