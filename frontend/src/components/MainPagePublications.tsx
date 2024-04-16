import React, { useEffect, useState } from "react";
import { Box, Typography, Link, List, ListItem } from "@mui/material";
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
            let reports: Report[] = context.keys().map((fileName: string) => {
                const title = (fileName.split('/').pop() || '').replace('.pdf', '');
                const url = `${process.env.PUBLIC_URL}/publications/${fileName}`;
                return { title, url };
            });

            // Sort reports based on year and quarter
            reports = reports.sort((a, b) => {
                const yearRegex = /(\d{4})/;
                const quarterRegex = /(Q[1-4])/i;

                const yearMatchA = a.title.match(yearRegex);
                const yearMatchB = b.title.match(yearRegex);

                const yearA = yearMatchA ? parseInt(yearMatchA[1]) : 0;
                const yearB = yearMatchB ? parseInt(yearMatchB[1]) : 0;

                if (yearA !== yearB) {
                    return yearB - yearA; // Sort by year in descending order
                } else {
                    // If years are equal, sort by quarter
                    const quarterMatchA = a.title.match(quarterRegex);
                    const quarterMatchB = b.title.match(quarterRegex);

                    const quarterA = quarterMatchA ? parseInt(quarterMatchA[1].slice(1)) : 0;
                    const quarterB = quarterMatchB ? parseInt(quarterMatchB[1].slice(1)) : 0;

                    // If one report has a quarter and the other doesn't, the one without a quarter should come first
                    if (quarterMatchA && !quarterMatchB) {
                        return 1;
                    } else if (!quarterMatchA && quarterMatchB) {
                        return -1;
                    } else {
                        return quarterB - quarterA;
                    }
                }
            });
            setReports(reports);
        };
        loadReports();
    }, []);

    return (
        <Box sx={{ bgcolor: "background.paper", padding: (theme) => theme.spacing(4) }}>
            <Typography variant="h1" gutterBottom align="left" color={"text.primary"}>
                Rapporter
            </Typography>
            <List sx={{ paddingLeft: 4 }}>
                {reports.map((report, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc' }}>
                        <StyledLink href={report.url} color="info.main" underline="none" target="_blank" rel="noopener noreferrer">
                            <Typography variant="h5" gutterBottom color={"info.main"}>
                                {report.title}
                            </Typography>
                        </StyledLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};


export default MainPagePublications;